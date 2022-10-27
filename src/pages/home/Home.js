import styles from './Home.module.css'
import {useState} from 'react'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useCollection, useCollectionSimple } from '../../hooks/useCollection'
//import {projectFirestore} from 'src/firebase/config.js'

// components
import ClassesList from './ClassesList'
import EditUsername from './EditUsername'
import EditEmail from './EditEmail'
import ClassEntryForm from './ClassEntryForm'
import AddPhone from './AddPhone'
import AddBio from './AddBio'

export default function Home() {
    const { user } = useAuthContext()
    const [cellNo, setCellNo] = useState('1234567890')
    const [pBio, setPbio] = useState('')
    const { documents, error } = useCollection(
        'Classes',
        ["uid","==", user.uid]
    )
    console.log("second call")
    const tO  = useCollectionSimple(
      'users',
      user.uid
    )
    tO.then((val) => 
      setCellNo(val.data().cellNum)
    ).catch( (error) => {
      console.log("non existing")
    }
    );

    const t1 = useCollectionSimple(
      'users',
      user.uid
    )
    t1.then((val) => 
      setPbio(val.data().personalBio)
    ).catch( (error) => {
      console.log("non existing")
    }
    );
    console.log("pbio " + pBio)
    console.log("cell no " + cellNo)

    return (
      <div className={styles.container}>
        <div className={styles.content}>
            {error && <p>{error}</p>}
            {documents && <ClassesList Classes={documents} />}
        </div>
        <div className={styles.sidebar}>
          <ClassEntryForm uid={user.uid} userName={user.displayName}/>
        </div>
        <div className={styles.sidebar}>
          <EditUsername uid={user.uid}/>
        </div>
        <div className={styles.sidebar}>
          <AddPhone uid={user.uid}/>
        </div>
        <div className={styles.sidebar}>
          <AddBio uid={user.uid}/>
        </div>
        <div className={styles.sidebar}>
          <EditEmail uid={user.uid}/>
        </div>
        <div className={styles.sidebar}>
          <h2>My info:</h2>
          <ul>
            <li><b>Email: {user.email}</b></li>
            <li><b>Phone #: {cellNo} </b></li>
            <li><p><b>Personal bio:</b> {pBio}</p></li>
          </ul>
        </div>
      </div>
    )
  }