import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/login.css'
import EditCalendarCollection from '../components/EditCalendarCollection';

function HomePage({username, setUsername, password, setPassword, schedule, setSchedule, loggedIn, setLoggedIn}) {

    const [newUsername, setNewUsername] = useState();
    const [newPassword, setNewPassword] = useState();
    const navigate = useNavigate();

    const signUp = () => {

       navigate('/signup');
    }

    const logIn = async () => {
        const account = {username: newUsername, password: newPassword}

        const response = await fetch('/collab/login', {
            method: 'POST',
            body: JSON.stringify(account),
            headers: {'Content-type': 'application/json'}
        });

        if (response.status == 200){
            alert("Successfully Logged In!")
            const user = await response.json();
            console.log(user);
            setLoggedIn(true);
            setUsername(newUsername);
            setPassword(newPassword);
            // setSchedule(JSON.parse(response.JSON()));
        } else {
            alert("Account doesn't exist")
        }
    }

    return (
        <div class="body">
            <div class="container">
                <div class="card">
                    <h1 class="title">Welcome to Crazy Collab</h1>
                    <div>{loggedIn == false ? '' : "Current User: " + username}</div>
                
                    <div class="subtitle">Sign in to start meeting</div>

                    <form class="form" onSubmit={e => {e.preventDefault(); logIn(); e.target.reset();}}>
                        <input type="text" class="input" placeholder="Username or email" onChange={e => setNewUsername(e.target.value)} required/>
                        <input type="password" class="input" placeholder="Password" onChange={e => setNewPassword(e.target.value)} required/>

                        <input type="submit" class="btn-signup" value="Log In"/>
                        <div class="input-disabled">Don't have an account yet?</div>
                        <button type="button" class="btn-signup" value="Sign up" onClick={signUp}>Sign Up</button>
                    </form>
                </div>
            </div>
            <div>{loggedIn == false ? <></> : 
                <div>
                    <div>Your Current Saved Schedule</div>
                    <EditCalendarCollection schedule={schedule} setSchedule={setSchedule}></EditCalendarCollection>
                </div>}
            </div>
        </div>
    )
}

export default HomePage;