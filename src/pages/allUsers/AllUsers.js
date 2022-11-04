import { useCollection } from '../../hooks/useCollection'
import styles from '../home/Home.module.css'
import AddRating from './AddRating'



// styles
import './AllUsers.css'

export default function AllUsers() {
  const { isPending, error, documents } = useCollection('users')

  return (
    <div className="user-list">
      <h2>Username&emsp;&emsp;Phone Number&emsp;&emsp;PersonalBio&emsp;&emsp;Rating&emsp;&emsp;Add Rating</h2>
      {isPending && <div>Loading users...</div>}
      {error && <div>{error}</div>}
      {documents && documents.map(user => (
        <div key={user.id} className="user-list-item">
          <span>{user.name}&emsp;&emsp;&emsp;&emsp;&emsp;{user.cellNum}&emsp;&emsp;&emsp;&emsp;{user.personalBio}&emsp;&emsp;&emsp;&emsp;{(user.totalRating)}&emsp;&emsp;&emsp;&emsp;
          {<div className={styles.container}><AddRating uid={user.id}/></div>}
          </span>
        </div>
      ))}
    </div>
  )
}