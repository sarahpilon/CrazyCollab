// Before hosting, you'll go through this page to view/edit your schedule (will come from database if signed in)import {useState} from 'react';
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import * as network from "../js/network_component.mjs";
import EditCalendarCollection from '../components/EditCalendarCollection';
import '../style/join.css';

const identitySchedule = [
    {id: 0, name: "monday", time: []},
    {id: 1, name: "tuesday", time: []},
    {id: 2, name: "wednesday", time: []},
    {id: 3, name: "thursday", time: []},
    {id: 4, name: "friday", time: []},
    {id: 5, name: "saturday", time: []},
    {id: 6, name: "sunday", time: []}
]

function HostPage(){

    const [inviteCode, setInviteCode] = useState();
    const [displayName, setDisplayName] = useState();
    const [schedule, setSchedule] = useState(identitySchedule);

    const navigate = useNavigate();

    async function handleInvite(){
    
        network.createOffer(setInviteCode, displayName, schedule);
        // channel = network.pc.createDataChannel('channel'); // Create new data channel after peer connection is made
        navigate('/meeting/host')
    
    }

    return (
        <div class="join-body">
            <div class="join-form">
                <label for="displayName" class="join-label display-name-button">Display Name</label>
                <input class="join-input" name="displayName" type="text" value={displayName} onChange={e => {setDisplayName(e.target.value)}}></input>
                <button class="join-button" onClick={e => {e.preventDefault(); handleInvite();}}>Create Meeting</button>
            </div>
            <div class="rightcard">
                <EditCalendarCollection schedule={schedule} setSchedule={setSchedule}></EditCalendarCollection>
            </div>
        </div>
    )
}

export default HostPage;