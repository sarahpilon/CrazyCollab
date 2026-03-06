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

function CollabJoinPage({connections, setConnections, username, userSchedule}) {

    const [inviteCode, setInviteCode] = useState();
    const [displayName, setDisplayName] = useState(username);
    const [groupMembers, setGroupMembers] = useState([displayName]);
    const [schedule, setSchedule] = useState(userSchedule);

    let pc = connections;

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
            // recieved data, do ...
            const message = JSON.parse(event.data);
            const dns = message.dns;
            const sch = message.sch;
            console.log("recieved a message: ", message);
            console.log("Display names: ", dns);
            console.log("Schedule: ", sch);
            handleMemberJoin(dns, sch);
        })
    });

    const handleScheduleAdd = (addSchedule) => {

        console.log("Current schedule:", schedule);

        console.log("New schedule to add: ", addSchedule);

        const newSchedule = schedule.map(dayA => {
           return {
                ...dayA,
                time: [
                    ...dayA.time,
                    ...addSchedule[dayA.id].time
                ]
           }
        })

        console.log("new schedule calculated: ", newSchedule);

        setSchedule(newSchedule);
    }

    const handleMemberJoin = (newMemberNames, newMemberSchedule) => {

        // Add name to name list
        const newMemberList = [
            ...newMemberNames
        ]

        setGroupMembers(newMemberList);

        // setSchedule(newMemberSchedule);
        setSchedule(newMemberSchedule);
    }

    return(
        <div class="body">
            <div class="card">
                <div class="logo">Crazy Collab</div>
                <div class="subtext">Find meeting times that actually work for everyone</div>
                <div class="group-members-title">Group Members</div>
                <div class="group-members-box">
                    {groupMembers.map((name, i) => <div key={i}>{name}</div>)}
                </div>
                <div class="invite-code">{inviteCode}</div>
            </div>

            <div class="rightcard">
                <div class="meeting-name">Group Meeting: Crazy Testing!</div>
                <div class="meeting-date">March 2-9</div>
                <div class="timezone">
                    <label for="timezone-select">Timezone:</label>
                    <select id="timezone-select" name="timezone" defaultValue={"PST"}>
                        <option value="PST">(PST) Pacific Time</option>
                        <option value="EST">(EST) Eastern Time</option>
                        <option value="CST">(CST) Central Time</option>
                        <option value="MST">(MST) Mountain Time</option>
                    </select>
                </div>

                <MeetCalendarCollection schedule={schedule} setSchedule={setSchedule}></MeetCalendarCollection>
            </div>
        </div>
    )
}

export default CollabJoinPage;