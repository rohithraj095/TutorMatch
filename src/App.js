import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

import Home from './pages/home/Home'
import AllUsers from './pages/allUsers/AllUsers'
import Tutor from './pages/tutor/Tutor'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

// styles
import './App.css'

function App() {

  const { authIsReady, user } = useAuthContext()

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Sidebar/>
          <div className="container">
            <Navbar/>
            <Routes>
              <Route exact path="/" element={ user ? <Home /> : <Navigate to="/login" />} />
              <Route exact path="/allUsers" element={ user ? <AllUsers /> : <Navigate to="/login" />} />
              <Route exact path="/tutor" element={ user ? <Tutor /> : <Navigate to="/login" />} />
              <Route path="/login" element={ user ? <Navigate to="/" /> : <Login />} />
              <Route path="/signup" element={ user ? user.displayName && <Navigate to="/" /> : <Signup />} />
            </Routes>
          </div>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App
