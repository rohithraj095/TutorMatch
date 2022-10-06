import styles from './Home.module.css'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useCollection } from '../../hooks/useCollection'

// components
import ClassesList from './ClassesList'
import EditUsername from './EditUsername'
import EditEmail from './EditEmail'
import ClassEntryForm from './ClassEntryForm'

export default function Home() {
    const { user } = useAuthContext()
    const { documents, error } = useCollection(
        'Classes',
        null,
        ["createdAt","desc"]
    )

    return (
      <div className={styles.container}>
        <div className={styles.content}>
            {error && <p>{error}</p>}
            {documents && <ClassesList Classes={documents} />}
        </div>
        <div className={styles.sidebar}>
          <ClassEntryForm uid={user.uid}/>
        </div>
        <div className={styles.sidebar}>
          <EditUsername uid={user.uid}/>
        </div>
        <div className={styles.sidebar}>
          <EditEmail uid={user.uid}/>
        </div>
        <div className={styles.sidebar}>
          <h2>My info:</h2>
          <ul>
            <li><b>Email: {user.email}</b></li>
            <li><b>Phone #: {user.phonenumber} </b></li>
          </ul>
        </div>
      </div>
    )
  }