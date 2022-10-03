import styles from './Home.module.css'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useCollection } from '../../hooks/useCollection'

// components
import PersonalInfoForm from './PersonalInfoForm'
import PersonalInfoList from './PersonalInfoList'

export default function Home() {
    const { user } = useAuthContext()
    const { documents, error } = useCollection(
        'PersonalInfo',
        ["uid","==", user.uid],
        ["createdAt","desc"]
    )

    return (
      <div className={styles.container}>
        <div className={styles.content}>
            {error && <p>{error}</p>}
            {documents && <PersonalInfoList PersonalInfo={documents} />}
        </div>
        <div className={styles.sidebar}>
          <PersonalInfoForm uid={user.uid}/>
        </div>
      </div>
    )
  }