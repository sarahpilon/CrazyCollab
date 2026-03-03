// Import the functions you need from the SDKs you need
import { data } from '@remix-run/router';
import {initializeApp} from 'firebase/app';
import {getFirestore, collection, deleteDoc, query, getDocs, getDoc, addDoc, setDoc, doc, onSnapshot} from 'firebase/firestore';
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

const identitySchedule = [
    {id: 0, name: "monday", time: []},
    {id: 1, name: "tuesday", time: []},
    {id: 2, name: "wednesday", time: []},
    {id: 3, name: "thursday", time: []},
    {id: 4, name: "friday", time: []},
    {id: 5, name: "saturday", time: []},
    {id: 6, name: "sunday", time: []}
]

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
let displayName = "Dylan Knapp";
let schedule = identitySchedule;

const servers = {
  iceServers: [
    {
      urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302'],
    },
  ],
  iceCandidatePoolSize: 10,
};

// Global state values
const pc = new RTCPeerConnection(servers); // Emits events to update database and emit media streams, etc
//let dataChannel = pc.createDataChannel("schedule"); // local data stream
//console.log(dataChannel);

/*
// peer data stream
pc.addEventListener('datachannel', event => {
    dataChannel = event.channel;
    console.log("data channel opened");
    dataChannel.send(displayName)
});

pc.addEventListener("connectionstatechange", event => {
    if (pc.connectionState === 'connected'){
        console.log("connected to peers!")
    }
})
    
dataChannel.addEventListener('open', event => {
    // opened datachannel, do ...
    console.log("triggered event listener");
    // send schedule data to other peers
})

dataChannel.addEventListener('close', event => {
    // closed datachannel, do ...
    console.log("data channel closed :(");
})

// to send data, do dataChannel.send(message)
// this event listener will listen for incoming messages
dataChannel.addEventListener('message', event => {
    // recieved data, do ...
    const message = event.data;
    console.log("recieved a message: ", event.data);
    updateSessionMembers(message);
    // const message = event.data
})
*/

// Create an offer
async function createOffer(setInviteCode, dn) {

    //console.log("Creating offer");

    displayName = dn;

    const callDoc = await addDoc(collection(db, 'calls'), {}); //collection(db, 'calls');

    const offerRefId = callDoc.id;
    console.log("Document written with id: ", offerRefId);

    const offerCanidates =  collection(db, 'calls', offerRefId, "offerCanidates");
    const answerCanidates = collection(db, 'calls', offerRefId, "answerCanidates");

    //callInput.value = callDoc.id;

    pc.onicecandidate = event => {
        if (event.candidate){
            //console.log(event.candidate.toJSON());
            event.candidate && addDoc(offerCanidates, event.candidate.toJSON()); //offerCanidates.add(event.candidate.toJSON());
        }
    }

    const offerDescription = await pc.createOffer();
    await pc.setLocalDescription(offerDescription);

    const offer = {
        sdp: offerDescription.sdp,
        type: offerDescription.type,
    };

    // New, and good
    try {
        await(setDoc(callDoc, {offer: offer}));
        setInviteCode(callDoc.id);
    } catch (e) {
        console.error("Error addiing document: ", e);
    }

    const offerQuery = query(collection(db, "calls"));

    const offerSnapshot = await getDocs(offerQuery);

    // Listen for remote answer
    onSnapshot(callDoc, (snapshot) => {
        console.log("listening to calls");
        const data = snapshot.data();
        if(!pc.currentRemoteDescription && data?.answer) {
            const answerDescription = new RTCSessionDescription(data.answer);
            pc.setRemoteDescription(answerDescription);
            console.log("setting remote description")
        }
    });

    const answerQuery = query(answerCanidates);

    const answerSnapshot = await getDocs(answerQuery);

    // When answered, add candidate to peer connection
    onSnapshot(answerQuery, (snapshot) => {
        console.log("offer answered, snapshot: ", snapshot);
        snapshot.docChanges().forEach((change) => {
            console.log("change: ", change)
            if (change.type === 'added'){
                const candidate = new RTCIceCandidate(change.doc.data());
                pc.addIceCandidate(candidate);
                console.log("added ice canidate");
            }
        })
    });
}

// Answering calls
async function answerCall(inviteCode, dn, sch) {

    const callId = inviteCode;
    displayName = dn;
    schedule = sch;

    console.log(callId);
    const callDoc = await doc(db, 'calls',callId);
    const offerCanidates = collection(db, 'calls', callId, "offerCanidates");
    const answerCanidates = collection(db, 'calls', callId, "answerCanidates");

     pc.onicecandidate = event => {
        event.candidate && addDoc(answerCanidates, event.candidate.toJSON());
        console.log("added ice canidate to answer canidates")
    }

    const callSnap = await getDoc(callDoc);
    const callData = callSnap.data();

    const offerDescription = callData.offer;
    await pc.setRemoteDescription(new RTCSessionDescription(offerDescription));

    const answerDescription = await pc.createAnswer();
    await pc.setLocalDescription(answerDescription);

    const answer = {
        sdp: answerDescription.sdp,
        type: answerDescription.type,
    };

    await(setDoc(callDoc, {answer: answer}));

    const offerQuery = query(offerCanidates);

    const offerSnapshot = await getDocs(offerQuery);
    onSnapshot(offerQuery, (snapshot) => {
        offerSnapshot.docChanges().forEach((change) => {
            if (change.type === 'added'){
                let data = change.doc.data();
                pc.addIceCandidate(new RTCIceCandidate(data));
                console.log("joined peer, and added ice canidate")
            }
        })
    });
}

export {createOffer, answerCall, displayName, pc, schedule}