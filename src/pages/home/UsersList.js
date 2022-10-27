import {useFirestore} from '../../hooks/useFirestore'

// styles
import styles from './Home.module.css'

export default function UsersList({ users }) {

    const { deleteDocument, response } = useFirestore('users')
    console.log(response)
  return (
    <ul userName={styles.course}>
      {users.map((Users) => (
        <li key={Users.id}>
        <p userName={styles.name}>{Users.name}</p>
        <p userName={styles.coursecode}>{Users.cellNum}</p>
        <p userName={styles.coursecode}>{Users.personalBio}</p>
      </li>
      ))}
    </ul> 
  )
}