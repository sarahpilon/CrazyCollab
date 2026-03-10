import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../style/home.css'
import MeetCalendarCollection from '../components/MeetCalendarCollection';
import * as network from '../js/network_component.mjs'

const identitySchedule = [
    {id: 0, name: "monday", time: []},
    {id: 1, name: "tuesday", time: []},
    {id: 2, name: "wednesday", time: []},
    {id: 3, name: "thursday", time: []},
    {id: 4, name: "friday", time: []},
    {id: 5, name: "saturday", time: []},
    {id: 6, name: "sunday", time: []}
]

function CollabJoinPage({connections, setConnections, username, userSchedule, groupName, setGroupName, inviteCode, setInviteCode}) {

    const [displayName, setDisplayName] = useState(username);
    const [groupMembers, setGroupMembers] = useState([displayName]);
    const [schedule, setSchedule] = useState(userSchedule);

    let pc = connections;

    // Setups datachanneling, will send data to the host once the channel opens
    pc.addEventListener('datachannel', event => {
        
        const channel = event.channel;
        console.log("Connecting to host channel: ", event.channel);
        console.log("data channel opened");

        // Event listeners for opened data channel
        channel.addEventListener('open', event => {

            const message = {dn: username, sch: userSchedule};
            channel.send(JSON.stringify(message));
            console.log("Sending message to host: ", message);
        });
    
        channel.addEventListener('close', event => {
            // closed datachannel, do ...
            console.log("data channel closed :(");
        })

        // to send data, do dataChannel.send(message)
        // this event listener will listen for incoming messages
        channel.addEventListener('message', event => {

            const message = JSON.parse(event.data);
            const dns = message.dns;
            const sch = message.sch;
            const gpn = message.gpn;
            console.log("recieved a message: ", message);
            console.log("Display names: ", dns);
            console.log("Schedule: ", sch);
            setGroupName(gpn);
            handleMemberJoin(dns, sch);
        })
    });

    const handleMemberJoin = (newMemberNames, newMemberSchedule) => {

        // Add name to name list
        const newMemberList = [
            ...newMemberNames
        ]

        setGroupMembers(newMemberList);

        setSchedule(newMemberSchedule);
    }

    return(
        <div class="body">
            <div class="card">
                <div class="group-members-title">Group Members</div>
                <div class="group-members-box">
                    {groupMembers.map((name, i) => <div key={i}>{name}</div>)}
                </div>
                <div class="invite-code">Invite Code: {inviteCode}</div>
            </div>

            <div class="rightcard">
                <div class="join-meeting-header">
                    <div class="meeting-name">Group Meeting: {groupName}</div>
                    <div class="meeting-date">March 9-15</div>
                </div>
                <MeetCalendarCollection schedule={schedule} setSchedule={setSchedule}></MeetCalendarCollection>
            </div>
        </div>
    )
}

export default CollabJoinPage;