import { useEffect, useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../style/home.css'
import MeetCalendarCollection from '../components/MeetCalendarCollection';
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


function CollabHostPage({inviteCode, setInviteCode, username, connections, setConnections, userSchedule}) {


    // let pc = connections;


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


    for (let pc of connections) {


        // Initialize host's datachannel
        let channel = pc.createDataChannel('channel');
        let code = inviteCode;
        console.log("Invite code: ", inviteCode);


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
                    console.log("Creating new peer connetion for next person: ", newpc.pc, "\nWith code: ", inviteCode, "\n\n\n");
                    newpc.createOffer(setInviteCode, username, schedule, false, inviteCode);
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


    // count group members for form count
    useEffect(() => {
    setAttendeeEmails(groupMembers.map(() => ""));
    }, [groupMembers]);


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
                <div class="Header2">
                    <div class="timezone">
                        <label for="timezone-select">Timezone:</label>
                        <select id="timezone-select" name="timezone" defaultValue={"PST"}>
                            <option value="PST">(PST) Pacific Time</option>
                            <option value="EST">(EST) Eastern Time</option>
                            <option value="CST">(CST) Central Time</option>
                            <option value="MST">(MST) Mountain Time</option>
                        </select>
                    </div>






                    <div className="Export-Calendar">
                        <Popup
                            trigger={<button>Export Calendar</button>}
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
                                    // send emails to backend and remove blank ones
                                    const filtered = attendeeEmails.filter(e => e.trim() !== "");
                                    fetch("http://localhost:3000/collab/invite-emails", {
                                        method: "POST",
                                        headers: { "Content-Type": "application/json" },
                                        // formatting it to match the attendees formatting needed
                                        body: JSON.stringify({ emails: filtered }),
                                    });




                                    // open authroization
                                    authWindowRef.current = window.open(
                                        "http://localhost:5173/meeting/host/oauth"
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

