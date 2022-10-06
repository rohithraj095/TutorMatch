import {useFirestore} from '../../hooks/useFirestore'

// styles
import styles from './Home.module.css'

export default function ClassesList({ Classes }) {

    const { deleteDocument, response } = useFirestore('Classes')
    console.log(response)
  return (
    <ul className={styles.course}>
      {Classes.map((classes) => (
        <li key={classes.id}>
        <p className={styles.name}>{classes.name}</p>
        <p className={styles.coursecode}>{classes.courseCode}</p>
        <button onClick={() => deleteDocument(classes.id)}>x</button>
      </li>
      ))}
    </ul> 
  )
}