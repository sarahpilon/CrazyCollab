import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import * as network from "../js/network_component.mjs";
import EditCalendarCollection from '../components/EditCalendarCollection';

const identitySchedule = [
    {id: 0, name: "monday", time: []},
    {id: 1, name: "tuesday", time: []},
    {id: 2, name: "wednesday", time: []},
    {id: 3, name: "thursday", time: []},
    {id: 4, name: "friday", time: []},
    {id: 5, name: "saturday", time: []},
    {id: 6, name: "sunday", time: []}
]

function JoinPage(){

    const [inviteCode, setInviteCode] = useState();
    const [displayName, setDisplayName] = useState();
    const [schedule, setSchedule] = useState(identitySchedule);

    const navigate = useNavigate();

    async function handleJoin(){

        network.answerCall(inviteCode, displayName, schedule);
        
        network.pc.addEventListener("connectionstatechange", event => {
                    
            console.log("Attempting peer connect");
            if (network.pc.connectionState === 'connected'){
                console.log("connected to host! Message coming from page!")
            
                 navigate(`/meeting/join`);
            
            } else {console.log("Not yet connected")};
        });

    }

    return (
        <div class="body">
        
            <label for="inviteCode">Invite Code</label>
            <input name="inviteCode" type="text" value={inviteCode} onChange={e => {setInviteCode(e.target.value)}}></input>
            <label for="displayName">Display Name</label>
            <input name="displayName" type="text" value={displayName} onChange={e => {setDisplayName(e.target.value)}}></input>
            <button onClick={e => {e.preventDefault(); handleJoin();}}>Join</button>
            <EditCalendarCollection schedule={schedule} setSchedule={setSchedule}></EditCalendarCollection>
        </div>
    )
}

export default JoinPage;