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

function CollabHostPage() {

    const [inviteCode, setInviteCode] = useState();
    const [displayName, setDisplayName] = useState("Dylan Knapp");
    const [groupMembers, setGroupMembers] = useState([displayName]);
    const [schedule, setSchedule] = useState(identitySchedule);

    const navigate = useNavigate();

    // Initialize host's datachannel
    let channel = network.pc.createDataChannel('channel');

    async function handleInvite(){

       network.createOffer(setInviteCode, displayName);
       // channel = network.pc.createDataChannel('channel'); // Create new data channel after peer connection is made
    

        network.pc.addEventListener("connectionstatechange", event => {
            if (network.pc.connectionState === 'connected'){
                console.log("connected to peers! Message coming from page!")
            
                const peerConnect = async () => {

                    channel.addEventListener('open', event => {

                        console.log("Data channel opened for host");
                        channel.send(displayName);
                        console.log("Sent message to peer from host");
                    })


                    channel.addEventListener('close', event => {
                        // closed datachannel, do ...
                        console.log("data channel closed :(");
                    })

                    // to send data, do dataChannel.send(message)
                    // this event listener will listen for incoming messages
                    channel.addEventListener('message', event => {
                        // recieved data, do ...
                        const message = JSON.parse(event.data);
                        const dn = message.dn;
                        const sch = message.sch;
                        console.log("recieved a message: ", message);
                        console.log("Display name: ", dn);
                        console.log("Schedule: ", sch);
                        handleMemberJoin(dn, sch);
                        //updateSessionMembers(message);
                        // const message = event.data
                    })
                }

                peerConnect();
            
            }
        })

    }

    const handleMemberJoin = (newMemberName, schedule) => {

        // Add name to name list
        const newMemberList = [
            ...groupMembers,
            newMemberName
        ]

        setGroupMembers(newMemberList);

        setSchedule(schedule);
    }

    useEffect(() => {
        
        const loadFunc = async () => {

            setDisplayName(network.displayName);
            
            console.log("Page loaded");
        }

        loadFunc();
    }, []);

    return(
        <div class="body">
            <div class="card">
                <div class="logo">Crazy Collab</div>
                <div class="subtext">Find meeting times that actually work for everyone</div>
                <div class="group-members-title">Group Members</div>
                <div class="group-members-box">
                    {groupMembers.map((name, i) => <div key={i}>{name}</div>)}
                </div>
                <a class="invite-button" onClick={e => {e.preventDefault(); handleInvite();}}>Invite More</a>
                <div class="invite-code">{inviteCode}</div>
            </div>

            <div class="rightcard">
                <div class="meeting-name">Group Meeting: Crazy Testing!</div>
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

export default CollabHostPage;