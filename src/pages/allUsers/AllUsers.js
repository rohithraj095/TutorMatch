import { useCollection } from '../../hooks/useCollection'

// styles
import './AllUsers.css'

export default function AllUsers() {
  const { isPending, error, documents } = useCollection('users')

  return (
    <div className="user-list">
      <h2>Username&emsp;&emsp;Phone Number&emsp;&emsp;PersonalBio</h2>
      {isPending && <div>Loading users...</div>}
      {error && <div>{error}</div>}
      {documents && documents.map(user => (
        <div key={user.id} className="user-list-item">
          <span>{user.name}&emsp;&emsp;&emsp;&emsp;&emsp;{user.cellNum}&emsp;&emsp;&emsp;&emsp;{user.personalBio}</span>
        </div>
      ))}
    </div>
  )
}