// Import the functions you need from the SDKs you need
import firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRAA3BT3A0iZNgupq9MUShLWP5lS_fKXE",
  authDomain: "crazy-collab.firebaseapp.com",
  projectId: "crazy-collab",
  storageBucket: "crazy-collab.firebasestorage.app",
  messagingSenderId: "621594972724",
  appId: "1:621594972724:web:9bf5e72648011a7ec8b061",
  measurementId: "G-09C1YBP1MP"
};

let callInput;

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

const firestore = firebase.firestore;

const servers = {
  iceServers: [
    {
      urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302'],
    },
  ],
  iceCandidatePoolSize: 10,
};

// Global state values
let pc = new RTCPeerConnection(); // Emits events to update database and emit media streams, etc
const dataChannel = pc.createDataChannel("schedule"); // local data stream

// peer data stream
pc.addEventListener('datachannel', event => {
    const dataChannel = event.channel;
});

dataChannel.addEventListener('open', event => {
    // opened datachannel, do ...

    // send schedule data to other peers
})

dataChannel.addEventListener('close', event => {
    // closed datachannel, do ...
})

// to send data, do dataChannel.send(message)
// this event listener will listen for incoming messages
dataChannel.addEventListener('message', event => {
    // recieved data, do ...

    // const message = event.data
})

// Create an offer
async function createOffer() {

    console.log("Creating offer");

    const callDoc = firestore.collection('calls').doc();
    const offerCanidates = callDoc.collection('offerCanidates');
    const answerCanidates = callDoc.collection('answerCanidates');

    callInput.value = callDoc.id;

    pc.onicecandidate = event => {
        event.candidate && offerCanidates.add(event.candidate.toJSON());
    }

    const offerDescription = await pc.createOffer();
    await pc.setLocalDescription(offerDescription);

    const offer = {
        sdp: offerDescription.sdp,
        type: offerDescription.type,
    };

    await callDoc.set({offer});

    callDoc.onSnapshot((snapshot) => {
        const data = snapshot.data();
        if(!pc.currentRemoteDescription && data?.answer) {
            const answerDescription = new RTCSessionDescription(data.answer);
            pc.setRemoteDescription(answerDescription);
        }
    });

    answerCanidates.onSnapshot(snapshot => {
        snapshot.docChanges().forEaach((change) => {
            if (change.type === 'added'){
                const candidate = new RTCIceCandidate(change.doc.data());
                pc.addIceCandidate(candidate);
            }
        })
    })
}

// Answering calls
async function answerCall() {
    const callId = callInput.value;
    const callDoc = firestore.collection('calls').doc(callId);
    const answerCanidates = callDoc.collection('answerCanidates');

     pc.onicecandidate = event => {
        event.candidate && offerCanidates.add(event.candidate.toJSON());
    }

    const callData = (await callDoc.get()).data();

    const offerDescription = callData.offer;
    await pc.setRemoteDescription(new RTCSessionDescription(offerDescription));

    const answerDescription = await pc.createAnswer();
    await pc.setLocalDescription(answerDescription);

    const answer = {
        type: answerDescription.type,
        sdp: answerDescription.sdp,
    };

    await callDoc.update({answer});

    offerCanidates.onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
            console.log(change);
            if (change.type === 'added'){
                let data = change.doc.data();
                pc.addIceCandidate(new RTCIceCandidate(data));
            }
        })
    })
}

export {createOffer, answerCall}