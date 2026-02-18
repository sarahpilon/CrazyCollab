import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage'
import CollabPage from './pages/CollabPage'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <Router>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/collab">Create a Meeting</Link>
          </nav>
          <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/collab" element={<CollabPage/>}></Route>
          </Routes>
        </Router>
    </div>
  )
}

export default App
