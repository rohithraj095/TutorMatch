import {useFirestore} from '../../hooks/useFirestore'
import {projectFirestore} from '../../firebase/config'
import { useAuthContext } from '../../hooks/useAuthContext'



// styles
import styles from './Home.module.css'


export default function ClassesListNoDel({ Classes }) {
  const { user } = useAuthContext()
  return (

    <ul className={styles.course}>
      {Classes.map((classes) => (
        //((projectFirestore.collection("users").doc(classes.uid).get().hideProfile==="false") || (projectFirestore.collection("users").doc(classes.uid).get().hideProfile==null)) ? (
        //(users.hideProfile==="false" || users.hideProfile==null) ? (
        <li key={classes.id}>
        <p className={styles.name}>{classes.name}</p>
        <p className={styles.coursecode}>{classes.isTutor}</p>
        <p className={styles.username}>user: {classes.userName}</p>
      </li>
        //) : null
      ))}
    </ul> 
  )
}