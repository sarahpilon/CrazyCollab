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
// let displayName = "Dylan Knapp";
// let schedule = identitySchedule;
// let inviteCode = '';

const servers = {
  iceServers: [
    {
      urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302'],
    },
  ],
  iceCandidatePoolSize: 10,
};

class Connection {

    connectionName;
    pc;
    displayName;
    schedule;
    inviteCode;
    setup;

    constructor(name){
        this.connectionName = name;
        this.displayName = "Dylan Knapp";
        this.pc = new RTCPeerConnection(servers);
        this.schedule = identitySchedule;
        this.inviteCode = '';
        this.setup = false;
    }

    // Create an offer
    async createOffer(setInviteCode, dn, sch, callId = null) {

        console.log("Creating offer by ", this.connectionName);

        this.displayName = dn;
        this.schedule = sch;

        let callDoc;
        let offerRefId;

        if (callId == null){

            console.log("Creating new doc");
            callDoc = await addDoc(collection(db, 'calls'), {}); //collection(db, 'calls');

            offerRefId = callDoc.id;
            this.inviteCode = offerRefId;
            // console.log("Document written with id: ", offerRefId);
        } else {
            console.log("connecting to exisitng doc with id: ", callId);
            callDoc = await doc(db, 'calls', callId);
            offerRefId = callId;
            this.inviteCode = offerRefId;
            console.log("Document written with id: ", offerRefId);
        }

        const offerCanidates =  collection(db, 'calls', offerRefId, "offerCanidates");
        const answerCanidates = collection(db, 'calls', offerRefId, "answerCanidates");

        //callInput.value = callDoc.id;

        this.pc.onicecandidate = event => {
            if (event.candidate){
                //console.log(event.candidate.toJSON());
                event.candidate && addDoc(offerCanidates, event.candidate.toJSON()); //offerCanidates.add(event.candidate.toJSON());
            }
        }

        const offerDescription = await this.pc.createOffer();
        await this.pc.setLocalDescription(offerDescription);

        const offer = {
            sdp: offerDescription.sdp,
            type: offerDescription.type,
        };

        // New, and good
        try {
            await(setDoc(callDoc, {offer: offer}));
            this.inviteCode = callDoc.id;
            if (callId == null){setInviteCode(callDoc.id);}
        } catch (e) {
            console.error("Error addiing document: ", e);
        }

        // inviteCode = callDoc.id;

        const offerQuery = query(collection(db, "calls"));

        const offerSnapshot = await getDocs(offerQuery);

        // Listen for remote answer
        onSnapshot(callDoc, (snapshot) => {
            console.log("listening to calls");
            const data = snapshot.data();
            if(!this.pc.currentRemoteDescription && data?.answer) {
                const answerDescription = new RTCSessionDescription(data.answer);
                this.pc.setRemoteDescription(answerDescription);
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
                    this.pc.addIceCandidate(candidate);
                    console.log("added ice canidate");
                }
            })
        });
    }
    
    // Answering calls
    async answerCall(ic, dn, sch) {

        const callId = ic;
        this.displayName = dn;
        this.schedule = sch;

        console.log(callId);
        const callDoc = await doc(db, 'calls', callId);
        const offerCanidates = collection(db, 'calls', callId, "offerCanidates");
        const answerCanidates = collection(db, 'calls', callId, "answerCanidates");

        this.pc.onicecandidate = event => {
            event.candidate && addDoc(answerCanidates, event.candidate.toJSON());
            console.log("added ice canidate to answer canidates")
        }

        const callSnap = await getDoc(callDoc);
        const callData = callSnap.data();

        const offerDescription = callData.offer;
        await this.pc.setRemoteDescription(new RTCSessionDescription(offerDescription));

        const answerDescription = await this.pc.createAnswer();
        await this.pc.setLocalDescription(answerDescription);

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
                    this.pc.addIceCandidate(new RTCIceCandidate(data));
                    console.log("joined peer, and added ice canidate")
                }
            })
        });
    }

}

// Global state values
// const pc = new RTCPeerConnection(servers); // Emits events to update database and emit media streams, etc
//let dataChannel = pc.createDataChannel("schedule"); // local data stream
//console.log(dataChannel);
/*
// Create an offer
async function createOffer(setInviteCode, dn, sch, callId = null) {

    //console.log("Creating offer");

    displayName = dn;
    schedule = sch;

    let callDoc;
    let offerRefId;

    if (callId == null){

        callDoc = await addDoc(collection(db, 'calls'), {}); //collection(db, 'calls');

        offerRefId = callDoc.id;
        inviteCode = offerRefId;
        console.log("Document written with id: ", offerRefId);
    } else {
        callDoc = await doc(db, 'calls', callId);
        offerRefId = callId;
    }

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
        inviteCode = callDoc.id;
        setInviteCode(callDoc.id);
    } catch (e) {
        console.error("Error addiing document: ", e);
    }

    // inviteCode = callDoc.id;

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
async function answerCall(ic, dn, sch) {

    const callId = ic;
    displayName = dn;
    schedule = sch;

    console.log(callId);
    const callDoc = await doc(db, 'calls', callId);
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
*/

export {Connection}