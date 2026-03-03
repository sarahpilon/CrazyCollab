import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage'
import CollabHostPage from './pages/CollabHostPage'
import CollabJoinPage from './pages/CollabJoinPage'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import JoinPage from './pages/JoinPage';

function App() {

  return (
    <div>
      <Router>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/meeting/host">Create a Meeting</Link>
            <Link to="/join">Join a Meeting</Link>
          </nav>
          <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/meeting/host" element={<CollabHostPage/>}></Route>
            <Route path="/meeting/join" element={<CollabJoinPage/>}></Route>
            <Route path="/join" element={<JoinPage/>}></Route>
          </Routes>
        </Router>
    </div>
  )
}

export default App
