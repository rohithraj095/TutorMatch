import styles from './Tutor.css'
import { useCollection, useCollectionSimple } from '../../hooks/useCollection'
//import {projectFirestore} from 'src/firebase/config.js'

// components
import ClassesList from '../home/ClassesList'

export default function Tutor() {
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
      </div>
    )
  }