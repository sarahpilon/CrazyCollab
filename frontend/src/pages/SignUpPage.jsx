import { useNavigate } from 'react-router-dom';

function SignUpPage({username, setUsername, password, setPassword, schedule, setSchedule, loggedIn, setLoggedIn}) {

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
            setLoggedIn(true);
            navigate('/');
        } else {
            alert("Account already exists")
        }
    }

    return (
        <div class="body">
            <div class="container">
                <div class="card">
                
                    <div class="subtitle">Create a new account</div>

                    <form class="form" onSubmit={e => {e.preventDefault(); signUp();}}>
                        <input type="text" class="input" placeholder="Username or email" onChange={e => {setUsername(e.target.value)}} required/>
                        <input type="password" class="input" placeholder="Password" onChange={e => setPassword(e.target.value)} required/>

                        <input type="submit" class="btn-signup" value="Sign Up"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUpPage;