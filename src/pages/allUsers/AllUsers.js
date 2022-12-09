import { useCollection } from '../../hooks/useCollection'
import styles from '../home/Home.module.css'
import { useAuthContext } from '../../hooks/useAuthContext'
import {projectFirestore} from '../../firebase/config'
import { useState } from 'react';
import AddRating from './AddRating'
import SendEmail from './SendEmail'
// import { useConnect } from '../../hooks/useConnect'



// styles
import './AllUsers.css'


export default function AllUsers() {
  const { isPending, error, documents } = useCollection('users')
  const { user } = useAuthContext()
  const [filterTime, changeFilterTime] = useState('')
  const [filterEnabled, setFilterEnabled] = useState(false);

  function isBetween(time, startTime, endTime) {
    // Convert time, startTime, and endTime to Date objects
    time = new Date("1/1/2000 " + time);
    startTime = new Date("1/1/2000 " + startTime);
    endTime = new Date("1/1/2000 " + endTime);
  
    // Check if time is between startTime and endTime
    return time >= startTime && time <= endTime;
  }

  const handleChange = (e) => {
    changeFilterTime(e.target.value)
  };

  const saveUser = (name) => {
    console.log("saving user: " + name);
    console.log("user id in save: " + user.uid) 
    projectFirestore.collection("users").doc(user.uid).update({
      savedUsers: name
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  
    if (filterTime === "" ) {
      alert("no time added for filter");
    } else {
      console.log("filtered users with time " + filterTime)
      //enable filter here'
      console.log("checked val: " + filterEnabled);
      filterEnabled ? setFilterEnabled(false) : setFilterEnabled(true);
      //window.location.reload()
    }
  };

  return (
    <div className="user-list">
      <h2>Username&emsp;&emsp;Phone Number&emsp;&emsp;&emsp;PersonalBio&emsp;&emsp;&emsp;Rating&emsp;&emsp;&emsp;Begin Time&emsp;&emsp;End Time&emsp;&emsp;&emsp;User Review </h2>
      <h3>
      <form>
        <label>
          Time filter: &nbsp;
          <input type="time" name="name" onChange={handleChange}/>
          &nbsp;
        </label>
        {filterEnabled 
          ? <button onClick={handleSubmit}>Disable</button>
          : <button onClick={handleSubmit}>Enable</button>
        }
      </form>
      </h3>
      {isPending && <div>Loading users...</div>}
      {error && <div>{error}</div>}
      {documents && documents.map(user => (
        !filterEnabled && (user.hideProfile==="false" || user.hideProfile==null) ? (
          <div key={user.id} className="user-list-item">
              <span><button onClick={() => saveUser(user.name)} className="btn">Add tutor/tutee</button>&emsp;{user.name}&emsp;&emsp;&emsp;&emsp;{user.cellNum}&emsp;&emsp;&emsp;{user.personalBio}&emsp;&emsp;&emsp;
              {(user.totalRating)}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{user.beginTime}&emsp;&emsp;&emsp;&emsp;
              {user.endTime}&emsp;&emsp;&emsp;&emsp;&emsp;{user.userReview}&emsp;&emsp;
              {<div className={styles.container}><AddRating uid={user.id} Username={user.name}/></div>}
              <form method="post" action={"mailto:"+user.email+'?subject='+"TutorMatch"+'&body='+"I would love to connect with you....."}><button className="btn">Connect with {user.name}</button></form>
              </span>
          </div>
        ) :
        isBetween(filterTime, user.beginTime, user.endTime) && (user.hideProfile==="false" || user.hideProfile==null) ? (
          <div key={user.id} className="user-list-item">
              <span><button className="btn">Add tutor/tutee</button>&emsp;{user.name}&emsp;&emsp;&emsp;&emsp;{user.cellNum}&emsp;&emsp;&emsp;{user.personalBio}&emsp;&emsp;&emsp;
              {(user.totalRating)}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{user.beginTime}&emsp;&emsp;&emsp;&emsp;
              {user.endTime}&emsp;&emsp;&emsp;&emsp;&emsp;{user.userReview}&emsp;&emsp;
              {<div className={styles.container}><AddRating uid={user.id} Username={user.name}/></div>}
              <form method="post" action={"mailto:"+user.email+'?subject='+"TutorMatch"+'&body='+"I would love to connect with you....."}><button className="btn">Connect with {user.name}</button></form>
              </span>
          </div>
        ) : null
        
      ))}
    </div>
  )
}