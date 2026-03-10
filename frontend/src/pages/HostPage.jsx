// Before hosting, you'll go through this page to view/edit your schedule (will come from database if signed in)import {useState} from 'react';
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import * as network from "../js/network_component.mjs";
import {Connection} from "../js/network_component.mjs";
import EditCalendarCollection from '../components/EditCalendarCollection';
import '../style/join.css';


function HostPage({inviteCode, setInviteCode, username, setUsername, schedule, setSchedule, loggedIn, connections, setConnections, groupName, setGroupName}){

    const navigate = useNavigate();

    async function postSchedule(){
        if (loggedIn == false){
            console.log("Can't post schedule, not logged in");
        } else {
            const userInfo = {schedule};
            const response = await fetch('/collab/schedule', {
                method: 'POST',
                body: JSON.stringify(userInfo),
                headers: {'Content-type': 'application/json'}
            })
        }
    }

    async function handleInvite(){
    
        const pc = new Connection("first");
        setConnections([...connections, pc.pc]);
        console.log(pc.pc);
        pc.createOffer(setInviteCode, username, schedule);
        navigate('/meeting/host');
    }

    return (
        <div class="join-body">
            <div class="join-form">
                <label for="groupName" class="join-label display-name-button">Meeting Name</label>
                <input class="join-input" name="groupName" type="text" value={groupName} onChange={e => {setGroupName(e.target.value)}}></input>
                <label for="username" class="join-label display-name-button">Display Name</label>
                <input class="join-input" name="username" type="text" value={username} onChange={e => {if(loggedIn == false) {setUsername(e.target.value)} else {alert("Can't edit account name")}}}></input>
                <button class="join-button" onClick={e => {e.preventDefault(); postSchedule(); handleInvite();}}>Create Meeting</button>
            </div>
            <div class="rightcard">
                <EditCalendarCollection schedule={schedule} setSchedule={setSchedule}></EditCalendarCollection>
            </div>
        </div>
    )
}

export default HostPage;