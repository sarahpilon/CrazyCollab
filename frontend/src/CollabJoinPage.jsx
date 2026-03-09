import { useEffect, useState } from 'react';
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

function CollabHostPage({inviteCode, setInviteCode, username, connections, setConnections, userSchedule}) {

    // let pc = connections;

    const [displayName, setDisplayName] = useState(username);
    const [groupMembers, setGroupMembers] = useState([displayName]);
    const [schedule, setSchedule] = useState(userSchedule);
    const [channels, setChannels] = useState([]);

    for (let pc of connections) {

        // Initialize host's datachannel
        let channel = pc.createDataChannel('channel');
        let code = inviteCode;
        console.log("Invite code: ", code);

        pc.addEventListener("connectionstatechange", event => {
            if (pc.connectionState === 'connected'){
                console.log("connected to peers! Message coming from page!")
                setChannels(e => [...channels, channel]);
                // network.extendConnection();
            
                const peerConnect = async () => {

                    channel.addEventListener('open', event => {

                        
                    })


                    channel.addEventListener('close', event => {
                        // closed datachannel, do ...
                        console.log("data channel closed :");
                    })

                    // to send data, do dataChannel.send(message)
                    // this event listener will listen for incoming messages
                    channel.addEventListener('message', event => {
                        // recieved data, do ...
                        const message = JSON.parse(event.data);
                        const dn = message.dn;
                        const sch = message.sch;
                        //console.log("recieved a message: ", message);
                        //console.log("Display name: ", dn);
                        //console.log("Schedule: ", sch);
                        
                        //updateSessionMembers(message);
                        // const message = event.data
                        const messageSent = handleMemberJoin(dn, sch, channel);
                        channel.send(JSON.stringify(messageSent));
                        console.log("Sending message to peer: ", messageSent);
                    })

                    const newpc = new network.Connection("second");
                    setConnections([...connections, newpc.pc]);
                    console.log("Creating new peer connetion for next person: ", newpc.pc, "\nWith code: ", code, "\n\n\n");
                    newpc.createOffer(setInviteCode, username, schedule);
                    pc.setup = true;
                }

                peerConnect();

            }
        })


    }

    const handleScheduleAdd = (addSchedule) => {


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

        return newSchedule;
    }

    const handleMemberJoin = (newMemberName, newMemberSchedule, currentChannel) => {

        console.log("HANDLING MEMBER JOIN\N\N");
        // Add name to name list
        const newMemberList = [
            ...groupMembers,
            newMemberName
        ]

        console.log("new member list: ", newMemberList)

        setGroupMembers(newMemberList);

        const newSchedule = handleScheduleAdd(newMemberSchedule);

        for (const channel of channels){

            const message = {dns: newMemberList, sch: newSchedule};
            channel.send(JSON.stringify(message));
        }

        return {dns: newMemberList, sch: newSchedule};

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
                <div class="invite-code">Invite Code: {inviteCode}</div>
            </div>

            <div class="rightcard">
                <div class="meeting-header">
                    <div class="meeting-name">Group Meeting: Crazy Testing!</div>
                    <div class="meeting-date">March 2-9</div>
                </div>
                <div class="schedule-controls">
                    <div class="timezone">
                        <label for="timezone-select">Timezone:</label>
                        <select id="timezone-select" name="timezone" defaultValue={"PST"}>
                            <option value="PST">(PST) Pacific Time</option>
                            <option value="EST">(EST) Eastern Time</option>
                            <option value="CST">(CST) Central Time</option>
                            <option value="MST">(MST) Mountain Time</option>
                        </select>
                    </div>
                    <div class="times-filter">
                        <label for="times-day-select">Times:</label>
                        <select id="times-day-select" name="times-day" defaultValue={"monday"}>
                            <option value="monday">Monday</option>
                            <option value="tuesday">Tuesday</option>
                            <option value="wednesday">Wednesday</option>
                            <option value="thursday">Thursday</option>
                            <option value="friday">Friday</option>
                            <option value="saturday">Saturday</option>
                            <option value="sunday">Sunday</option>
                        </select>
                        <select id="times-start-select" name="times-start" defaultValue={"08:00"}>
                            <option value="08:00">8:00 AM</option>
                            <option value="08:30">8:30 AM</option>
                            <option value="09:00">9:00 AM</option>
                            <option value="09:30">9:30 AM</option>
                            <option value="10:00">10:00 AM</option>
                            <option value="10:30">10:30 AM</option>
                            <option value="11:00">11:00 AM</option>
                            <option value="11:30">11:30 AM</option>
                            <option value="12:00">12:00 PM</option>
                            <option value="12:30">12:30 PM</option>
                            <option value="13:00">1:00 PM</option>
                            <option value="13:30">1:30 PM</option>
                            <option value="14:00">2:00 PM</option>
                            <option value="14:30">2:30 PM</option>
                            <option value="15:00">3:00 PM</option>
                            <option value="15:30">3:30 PM</option>
                            <option value="16:00">4:00 PM</option>
                            <option value="16:30">4:30 PM</option>
                            <option value="17:00">5:00 PM</option>
                            <option value="17:30">5:30 PM</option>
                            <option value="18:00">6:00 PM</option>
                        </select>
                        <span class="times-to">to</span>
                        <select id="times-end-select" name="times-end" defaultValue={"17:00"}>
                            <option value="08:30">8:30 AM</option>
                            <option value="09:00">9:00 AM</option>
                            <option value="09:30">9:30 AM</option>
                            <option value="10:00">10:00 AM</option>
                            <option value="10:30">10:30 AM</option>
                            <option value="11:00">11:00 AM</option>
                            <option value="11:30">11:30 AM</option>
                            <option value="12:00">12:00 PM</option>
                            <option value="12:30">12:30 PM</option>
                            <option value="13:00">1:00 PM</option>
                            <option value="13:30">1:30 PM</option>
                            <option value="14:00">2:00 PM</option>
                            <option value="14:30">2:30 PM</option>
                            <option value="15:00">3:00 PM</option>
                            <option value="15:30">3:30 PM</option>
                            <option value="16:00">4:00 PM</option>
                            <option value="16:30">4:30 PM</option>
                            <option value="17:00">5:00 PM</option>
                            <option value="17:30">5:30 PM</option>
                            <option value="18:00">6:00 PM</option>
                            <option value="18:30">6:30 PM</option>
                        </select>
                    </div>
                </div>
                <MeetCalendarCollection schedule={schedule} setSchedule={setSchedule}></MeetCalendarCollection>
            </div>
        </div>
    )
}

export default CollabHostPage;