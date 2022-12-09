import { useCollection } from '../../hooks/useCollection'
import styles from '../home/Home.module.css'
import AddRating from './AddRating'
import SendEmail from './SendEmail'
// import { useConnect } from '../../hooks/useConnect'



// styles
import './AllUsers.css'

export default function AllUsers() {
  const { isPending, error, documents } = useCollection('users')
  // const { connect } = useConnect()

  return (
    <div className="user-list">
      <h2>Username&emsp;&emsp;Phone Number&emsp;&emsp;&emsp;PersonalBio&emsp;&emsp;&emsp;Rating&emsp;&emsp;&emsp;Begin Time&emsp;&emsp;End Time&emsp;&emsp;&emsp;User Review </h2>
      <h3>
      <form>
        <label>
          Time filter:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      </h3>
      {isPending && <div>Loading users...</div>}
      {error && <div>{error}</div>}
      {documents && documents.map(user => (
        <div key={user.id} className="user-list-item">
          <span>&emsp;{user.name}&emsp;&emsp;&emsp;&emsp;{user.cellNum}&emsp;&emsp;&emsp;{user.personalBio}&emsp;&emsp;&emsp;
          {(user.totalRating)}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{user.beginTime}&emsp;&emsp;&emsp;&emsp;
          {user.endTime}&emsp;&emsp;&emsp;&emsp;&emsp;{user.userReview}&emsp;&emsp;
          {<div className={styles.container}><AddRating uid={user.id} Username={user.name}/></div>}
          <form method="post" action={"mailto:"+user.email+'?subject='+"TutorMatch"+'&body='+"I would love to connect with you....."}><button className="btn">Connect with {user.name}</button></form>
          </span>
        </div>
      ))}
    </div>
  )
}