import { useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage'
import CollabHostPage from './pages/CollabHostPage'
import CollabJoinPage from './pages/CollabJoinPage'
import JoinPage from './pages/JoinPage';
import HostPage from './pages/HostPage';
import SignUpPage from './pages/SignUpPage';
import Autorization from './pages/Autorization';





const identitySchedule = [
    {id: 0, name: "monday", time: []},
    {id: 1, name: "tuesday", time: []},
    {id: 2, name: "wednesday", time: []},
    {id: 3, name: "thursday", time: []},
    {id: 4, name: "friday", time: []},
    {id: 5, name: "saturday", time: []},
    {id: 6, name: "sunday", time: []}
]


function App() {


  // Globals for the user
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [schedule, setSchedule] = useState(identitySchedule);
  const [inviteCode, setInviteCode] = useState();
  const [loggedIn, setLoggedIn] = useState(false);
  const [connections, setConnections] = useState([]);
  const [groupName, setGroupName] = useState("Group Meeting");

  return (
    <div>
      <Router>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/host">Create a Meeting</Link>
            <Link to="/join">Join a Meeting</Link>
          </nav>
          <Routes>
            <Route path="/" element={<HomePage username={username} setUsername={setUsername}
                                               password={password} setPassword={setPassword}
                                               loggedIn={loggedIn} setLoggedIn={setLoggedIn}
                                               schedule={schedule} setSchedule={setSchedule}/>}></Route>
            <Route path="/meeting/host" element={<CollabHostPage inviteCode={inviteCode} setInviteCode={setInviteCode}
                                                                 connections={connections} setConnections={setConnections}
                                                                 username={username} userSchedule={schedule}
                                                                 groupName={groupName} setGroupName={setGroupName}/>}></Route>
            <Route path="/meeting/host/oauth" element={<Autorization/>}></Route>
            <Route path="/meeting/join" element={<CollabJoinPage connections={connections} setConnections={setConnections}
                                                                 username={username} userSchedule={schedule}
                                                                 groupName={groupName} setGroupName={setGroupName}
                                                                 inviteCode={inviteCode} setInviteCode={setInviteCode}/>}></Route>
            <Route path="/join" element={<JoinPage username={username} setUsername={setUsername}
                                                   schedule={schedule} setSchedule={setSchedule}
                                                   connections={connections} setConnections={setConnections}
                                                   loggedIn={loggedIn}
                                                   inviteCode={inviteCode} setInviteCode={setInviteCode}/>}></Route>
            <Route path="/host" element={<HostPage inviteCode={inviteCode} setInviteCode={setInviteCode}
                                                   connections={connections} setConnections={setConnections}
                                                   username={username} setUsername={setUsername}
                                                   schedule={schedule} setSchedule={setSchedule}
                                                   loggedIn={loggedIn} groupName={groupName}
                                                   setGroupName={setGroupName}/>}></Route>
            <Route path="/signup" element={<SignUpPage username={username} setUsername={setUsername}
                                                       password={password} setPassword={setPassword}
                                                       loggedIn={loggedIn} setLoggedIn={setLoggedIn}
                                                       schedule={schedule} setSchedule={setSchedule}></SignUpPage>}></Route>
          </Routes>
        </Router>
    </div>
  )
}


export default App