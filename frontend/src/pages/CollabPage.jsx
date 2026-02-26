import { useEffect, useState } from 'react';
import '../style/home.css'
import CalendarCollection from '../components/CalendarCollection';
import * as network from '../js/network_component.mjs'

function CollabPage() {

    const [inviteCode, setInviteCode] = useState();
    const [displayName, setDisplayName] = useState("Dylan Knapp");
    const [groupMembers, setGroupMembers] = useState([displayName]);

    async function handleInvite(){

       network.createOffer(setInviteCode);
    }

    const handleMemberJoin = (newMemberName) => {

        const newMemberList = [
            ...groupMembers,
            newMemberName
        ]

        setGroupMembers(newMemberList);
    }

    useEffect(() => {
        
        const loadFunc = async () => {

            setDisplayName(network.displayName);
            network.setFunction(handleMemberJoin);
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

                <CalendarCollection></CalendarCollection>
            </div>
        </div>
    )
}

export default CollabPage;