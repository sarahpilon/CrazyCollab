import { useEffect, useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../style/home.css'
import MeetCalendarCollection from '../components/MeetCalendarCollection';
import TimezoneSelector from '../components/TimezoneSelector';
import * as network from '../js/network_component.mjs';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


const identitySchedule = [
    {id: 0, name: "monday", time: []},
    {id: 1, name: "tuesday", time: []},
    {id: 2, name: "wednesday", time: []},
    {id: 3, name: "thursday", time: []},
    {id: 4, name: "friday", time: []},
    {id: 5, name: "saturday", time: []},
    {id: 6, name: "sunday", time: []}
]


function CollabHostPage({inviteCode, setInviteCode, username, connections, setConnections, userSchedule, groupName, setGroupName}) {

    const [displayName, setDisplayName] = useState(username);
    const [groupMembers, setGroupMembers] = useState([displayName]);
    const [schedule, setSchedule] = useState(userSchedule);
    const [channels, setChannels] = useState([]);
    const [attendeeEmails, setAttendeeEmails] = useState([]);

    // update the emails for the form to update
    function updateEmail(index, value) {
        
        const copy = [...attendeeEmails];
        copy[index] = value;
        setAttendeeEmails(copy);
    }

    // keep track of popup
    const authWindowRef = useRef(null);

    // Host will have multiple peer connections, and for each one it must 
    // listen to their messages and pass the collective group data
    for (let pc of connections) {

        // Initialize host's datachannel
        let channel = pc.createDataChannel('channel');
        console.log("Invite code: ", inviteCode);

        pc.addEventListener("connectionstatechange", event => {
            
            if (pc.connectionState === 'connected'){
                
                console.log("connected to peers! Message coming from page!")
                setChannels(e => [...channels, channel]);
           
                // Async function to contain event listeners for peer connection
                const peerConnect = async () => {

                    channel.addEventListener('close', event => {
                        
                        // closed datachannel, do ...
                        console.log("data channel closed :");
                    })

                    // to send data, do dataChannel.send(message)
                    // this event listener will listen for incoming messages
                    channel.addEventListener('message', event => {
                        
                        const message = JSON.parse(event.data);
                        const dn = message.dn;
                        const sch = message.sch;

                        const messageSent = handleMemberJoin(dn, sch, channel);
                        channel.send(JSON.stringify(messageSent));
                        console.log("Sending message to peer: ", messageSent);
                    })

                    const newpc = new network.Connection("second");
                    setConnections([...connections, newpc.pc]);
                    newpc.createOffer(setInviteCode, username, schedule, false, inviteCode);
                    pc.setup = true;
                }

                peerConnect();
            }
        })
    }

    const handleScheduleAdd = (addSchedule) => {

        const newSchedule = schedule.map(dayA => {
           
            return {
                ...dayA,
                time: [
                    ...dayA.time,
                    ...addSchedule[dayA.id].time
                ]
           }
        })

        setSchedule(newSchedule);

        return newSchedule;
    }

    // count group members for form count
    useEffect(() => {
        setAttendeeEmails(groupMembers.map(() => ""));
    }, [groupMembers]);

    const handleMemberJoin = (newMemberName, newMemberSchedule, currentChannel) => {

        // Add name to name list
        const newMemberList = [
            ...groupMembers,
            newMemberName
        ]

        setGroupMembers(newMemberList);

        const newSchedule = handleScheduleAdd(newMemberSchedule);

        for (const channel of channels){

            const message = {dns: newMemberList, sch: newSchedule};
            channel.send(JSON.stringify(message));
        }

        return {dns: newMemberList, sch: newSchedule, gpn: groupName};
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
                <div class="meeting-header">
                    <div class="meeting-name">Group Meeting: {groupName}</div>
                    <TimezoneSelector/>
                    <div class="meeting-date">March 9-15</div>
                </div>
                <div class="schedule-controls">
                    <div class="times-filter">
                        <label for="times-day-select">Times:</label>
                        <select id="times-day-select" name="times-day" defaultValue={"monday"}>
                            <option value="9">Monday</option>
                            <option value="10">Tuesday</option>
                            <option value="11">Wednesday</option>
                            <option value="12">Thursday</option>
                            <option value="13">Friday</option>
                            <option value="14">Saturday</option>
                            <option value="15">Sunday</option>
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
                    <div className="export-calendar">
                        <Popup
                            trigger={<button className="export-calendar-button">Export Calendar</button>}
                            modal
                            nested
                        >
                            {close => (
                            <div className="popup">
                                <h3>Enter emails</h3>
                                {groupMembers.map((member, index) => (
                                    <div key={index}>
                                    <label>Member Email: </label>
                                    <input
                                        type="email"
                                        value={attendeeEmails[index] || ""}
                                        onChange={(e) => updateEmail(index, e.target.value)}
                                        placeholder={'....@gmail.com'}
                                    />
                                    </div>
                                ))}

                                <button
                                    onClick={() => {

                                    // read values to send to backend
                                    const day = document.getElementById("times-day-select").value;
                                    const start = document.getElementById("times-start-select").value;
                                    const end = document.getElementById("times-end-select").value;
                                    const timezone = document.getElementById("timezone-select").value;

                                    // send emails to backend and remove blank ones
                                    const filtered = attendeeEmails.filter(e => e.trim() !== "");
                                    fetch("/collab/invite-emails", {
                                        method: "POST",
                                        headers: { "Content-Type": "application/json" },
                                        // formatting it to match the attendees formatting needed
                                        body: JSON.stringify({ emails: filtered }),
                                    });

                                    // send selected time
                                    fetch("/collab/google/createEvent", {
                                        method: "POST",
                                        headers: { "Content-Type": "application/json" },
                                        body: JSON.stringify({ day, start, end, timezone }),
                                    });

                                    // open authroization
                                    authWindowRef.current = window.open(
                                        "/meeting/host/oauth"
                                    );

                                    // close the popup
                                    close();
                                    }}
                                >
                                    Continue
                                </button>

                                <button onClick={close}>
                                    Cancel
                                </button>
                            </div>
                            )}
                        </Popup>
                    </div>
                </div>
                <MeetCalendarCollection schedule={schedule} setSchedule={setSchedule}></MeetCalendarCollection>
            </div>
        </div>
    )
}


export default CollabHostPage;
