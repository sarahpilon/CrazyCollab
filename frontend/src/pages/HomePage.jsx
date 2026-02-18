import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/home.css'

function HomePage() {

    const [name, setName] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();

    const logIn = async () => {

        const newAccount = {name, password}
        const response = await fetch('/collab', {
            method: 'POST',
            body: JSON.stringify(newAccount),
            headers: {'Content-type': 'application/json'}
        });

        if (response.status == 200){
            alert("Successfully Logged In!")
        } else {
            alert("Failed to Log In")
        }
        navigate('/collab');;
    }

    return (
        <div class="container">
            <div class="card">
                <h1 class="title">Welcome to Crazy Collab</h1>
            
                <div class="subtitle">Sign in to start meeting</div>

                <form class="form">
                    <input type="text" class="input" placeholder="Username or email" required onChange={e => setName(e.target.value)}></input>
                    <input type="password" class="input" placeholder="Password" required onChange={e => setPassword(e.target.value)}></input>

                    <div class="input-disabled">Don't have an account yet?</div>
                
                    <button type="button" class="btn-signup" onClick={logIn}>Sign up</button>
                </form>
            </div>
        </div>
    )
}

export default HomePage;