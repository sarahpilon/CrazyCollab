import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import * as network from "../js/network_component.mjs";

function JoinPage(){

    const [inviteCode, setInviteCode] = useState();
    const [displayName, setDisplayName] = useState();

    const navigate = useNavigate();

    async function handleJoin(){

        await network.answerCall(inviteCode, displayName);
        navigate('/meeting');
    }

    return (
        <div class="body">
        
            <label for="inviteCode">Invite Code</label>
            <input name="inviteCode" type="text" value={inviteCode} onChange={e => {setInviteCode(e.target.value)}}></input>
            <label for="displayName">Display Name</label>
            <input name="displayName" type="text" value={displayName} onChange={e => {setDisplayName(e.target.value)}}></input>
            <button onClick={e => {e.preventDefault(); handleJoin();}}>Join</button>
        </div>
    )
}

export default JoinPage;