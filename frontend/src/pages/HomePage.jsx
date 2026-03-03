import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/login.css'

function HomePage() {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();

    const signUp = async () => {

        const account = {username, password}
        const response = await fetch('/collab/signup', {
            method: 'POST',
            body: JSON.stringify(account),
            headers: {'Content-type': 'application/json'}
        });

        if (response.status == 200){
            alert("Successfully Signed Up!")
        } else {
            alert("Account already exists")
        }
    }

    const logIn = async () => {
        const account = {username, password}
        const response = await fetch('/collab/login', {
            method: 'POST',
            body: JSON.stringify(account),
            headers: {'Content-type': 'application/json'}
        });

        if (response.status == 200){
            alert("Successfully Logged In!")
        } else {
            alert("Account doesn't exist")
        }
    }

    return (
        <div class="body">
            <div class="container">
                <div class="card">
                    <h1 class="title">Welcome to Crazy Collab</h1>
                
                    <div class="subtitle">Sign in to start meeting</div>

                    <form class="form">
                        <input type="text" class="input" placeholder="Username or email" required onChange={e => setUsername(e.target.value)}></input>
                        <input type="password" class="input" placeholder="Password" required onChange={e => setPassword(e.target.value)}></input>

                        <button type="button" class="btn-signup" onClick={logIn}>Log in</button>
                        <div class="input-disabled">Don't have an account yet?</div>
                    
                        <button type="button" class="btn-signup" onClick={signUp}>Sign up</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default HomePage;