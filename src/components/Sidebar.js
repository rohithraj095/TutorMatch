import { NavLink } from "react-router-dom"
import SendEmail from '../pages/allUsers/SendEmail'

// styles & images
import "./Sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <nav className="links">
          <ul>
          <li>
              <NavLink to="/allUsers">
                <span>All Users</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/tutor">
                <span>Find Tutor</span>
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/">
                <span>Dashboard</span>
              </NavLink>
            </li>
          </ul>
        </nav>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h4>&emsp;Contact Us:</h4>
        <br></br>
        <div style={{right:'100px', top:'2033px'}}><SendEmail/></div>
      </div>
    </div>
  )
}