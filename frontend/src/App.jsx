import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage'
import CollabHostPage from './pages/CollabHostPage'
import CollabJoinPage from './pages/CollabJoinPage'
import JoinPage from './pages/JoinPage';
import HostPage from './pages/HostPage'

function App() {

  
  const [inviteCode, setInviteCode] = useState();

  return (
    <div>
      <Router>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/host">Create a Meeting</Link>
            <Link to="/join">Join a Meeting</Link>
          </nav>
          <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/meeting/host" element={<CollabHostPage inviteCode={inviteCode} setInviteCode={setInviteCode}/>}></Route>
            <Route path="/meeting/join" element={<CollabJoinPage/>}></Route>
            <Route path="/join" element={<JoinPage/>}></Route>
            <Route path="/host" element={<HostPage inviteCode={inviteCode} setInviteCode={setInviteCode}/>}></Route>
          </Routes>
        </Router>
    </div>
  )
}

export default App
