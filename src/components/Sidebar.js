import { NavLink } from "react-router-dom"

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
      </div>
    </div>
  )
}