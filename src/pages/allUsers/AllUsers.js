import { useCollection } from '../../hooks/useCollection'
import styles from '../home/Home.module.css'
import { useState } from 'react';
import AddRating from './AddRating'
import SendEmail from './SendEmail'
// import { useConnect } from '../../hooks/useConnect'



// styles
import './AllUsers.css'



export default function AllUsers() {
  const { isPending, error, documents } = useCollection('users')
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
        !filterEnabled ? (
          <div key={user.id} className="user-list-item">
              <span><button className="btn">Connect</button>&emsp;{user.name}&emsp;&emsp;&emsp;&emsp;{user.cellNum}&emsp;&emsp;&emsp;{user.personalBio}&emsp;&emsp;&emsp;
              {(user.totalRating)}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{user.beginTime}&emsp;&emsp;&emsp;&emsp;
              {user.endTime}&emsp;&emsp;&emsp;&emsp;&emsp;{user.userReview}&emsp;&emsp;
              {<div className={styles.container}><AddRating uid={user.id} Username={user.name}/></div>}
              </span>
          </div>
        ) :
        isBetween(filterTime, user.beginTime, user.endTime) ? (
          <div key={user.id} className="user-list-item">
              <span><button className="btn">Connect</button>&emsp;{user.name}&emsp;&emsp;&emsp;&emsp;{user.cellNum}&emsp;&emsp;&emsp;{user.personalBio}&emsp;&emsp;&emsp;
              {(user.totalRating)}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{user.beginTime}&emsp;&emsp;&emsp;&emsp;
              {user.endTime}&emsp;&emsp;&emsp;&emsp;&emsp;{user.userReview}&emsp;&emsp;
              {<div className={styles.container}><AddRating uid={user.id} Username={user.name}/></div>}
              </span>
          </div>
        ) : null
        
      ))}
    </div>
  )
}