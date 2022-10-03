import {useFirestore} from '../../hooks/useFirestore'

// styles
import styles from './Home.module.css'

export default function PersonalInfoList({ PersonalInfo }) {

    const { deleteDocument, response } = useFirestore('PersonalInfo')
    console.log(response)
  return (
    <ul className={styles.personalinfo}>
      {PersonalInfo.map((personalinfo) => (
        <li key={personalinfo.id}>
        <p className={styles.name}>{personalinfo.name}</p>
        <p className={styles.phonenumber}>#{personalinfo.phonenumber}</p>
        <button onClick={() => deleteDocument(personalinfo.id)}>x</button>
      </li>
      ))}
    </ul>
  )
}