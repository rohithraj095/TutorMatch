
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import { useLogout } from '../hooks/useLogout'
import { useDeleteAccount } from '../hooks/useDeleteAccount'
import { useAuthContext } from '../hooks/useAuthContext'

export default function Navbar() {
    const { logout } = useLogout()
    const { deleteAcc } = useDeleteAccount()
    const { user } = useAuthContext()

    return (
        <nav className={styles.navbar}>
          <ul>
            <li className={styles.title}>TutorMatch</li>
            
            {!user && (
              <>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Signup</Link></li>
              </>
            )}
    
            {user && (
              <>
                <li>hello, {user.displayName}</li>
                <li>
                  <button className="btn" onClick={logout}>Logout</button>
                </li>
                <li>
                  <button className="btn" onClick={deleteAcc}>Delete Account</button>
                </li>
              </>
            )}
          </ul>
        </nav>
      )
}