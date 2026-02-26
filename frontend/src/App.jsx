import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage'
import CollabPage from './pages/CollabPage'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import JoinPage from './pages/JoinPage';

function App() {

  return (
    <div>
      <Router>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/meeting">Create a Meeting</Link>
            <Link to="/join">Join a Meeting</Link>
          </nav>
          <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/meeting" element={<CollabPage/>}></Route>
            <Route path="/join" element={<JoinPage/>}></Route>
          </Routes>
        </Router>
    </div>
  )
}

export default App
