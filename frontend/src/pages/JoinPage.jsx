import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import * as network from "../js/network_component.mjs";
import { Connection } from '../js/network_component.mjs';
import EditCalendarCollection from '../components/EditCalendarCollection';
import '../style/join.css';

function JoinPage({username, setUsername, schedule, setSchedule, connections, setConnections}){

    const [inviteCode, setInviteCode] = useState();
    // const [displayName, setDisplayName] = useState();

    const navigate = useNavigate();

    async function handleJoin(){

        const pc = new Connection();

        setConnections(pc.pc);

        pc.answerCall(inviteCode, username, schedule);
        
        pc.pc.addEventListener("connectionstatechange", event => {
                    
            console.log("Attempting peer connect");
            if (pc.pc.connectionState === 'connected'){
                console.log("connected to host! Message coming from page!")
            
                 navigate(`/meeting/join`);
            
            } else {console.log("Not yet connected")};
        });

    }

    return (
        <div class="join-body">
            <div class="join-form">
                <label for="inviteCode" class="join-label invite-code-button">Invite Code</label>
                <input class="join-input" name="inviteCode" type="text" value={inviteCode} onChange={e => {setInviteCode(e.target.value)}}></input>
                <label for="username" class="join-label display-name-button">Display Name</label>
                <input class="join-input" name="username" type="text" value={username} onChange={e => {if(username == null) {setUsername(e.target.value)} else {alert("Can't edit account name")}}}></input>
                <button class="join-button" onClick={e => {e.preventDefault(); handleJoin();}}>Join</button>
            </div>
            <div class="rightcard">
                <EditCalendarCollection schedule={schedule} setSchedule={setSchedule}></EditCalendarCollection>
            </div>
        </div>
    )
}

export default JoinPage;