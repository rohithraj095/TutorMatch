import {useFirestore} from '../../hooks/useFirestore'

// styles
import styles from './Home.module.css'


export default function ClassesListNoDel({ Classes }) {
  return (

    <ul className={styles.course}>
      {Classes.map((classes) => (
        <li key={classes.id}>
        <p className={styles.name}>{classes.name}</p>
        <p className={styles.coursecode}>{classes.isTutor}</p>
        <p className={styles.username}>user: {classes.userName}</p>
      </li>
      ))}
    </ul> 
  )
}