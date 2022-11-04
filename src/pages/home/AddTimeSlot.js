import { useState, useEffect } from 'react'
import { useAddBio } from '../../hooks/useAddBio'
import { useAddTimeSlot } from '../../hooks/useAddTimeSlot'
//import PhoneInput from 'react-phone-input-2'
import { useFirestore } from '../../hooks/useFirestore'


export default function AddTimeSlot({ uid }) {
  const [beginTime, setBeginTime] = useState('')
  const [endTime, setEndTime] = useState('')

  const { addTimeSlot } = useAddTimeSlot()
//   const { editUser, updateName } = useFirestore('PersonalInfo')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("times updated " + beginTime + endTime);
    try {
        addTimeSlot(beginTime, endTime);
    }
    catch(err) {
        console.log("error in eUsername")
        console.log(err.message);
    }
    
    
    
  }

  return (
    <>
      <h4>Add availability time slot</h4>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Begin Time:</span>
          <input 
            type="text"
            required
            onChange={e => setBeginTime(e.target.value)}
            value={beginTime} 
          />
        </label>
        <label>
          <span>End Time:</span>
          <input 
            type="text"
            required
            onChange={e => setEndTime(e.target.value)}
            value={endTime} 
          />
        </label>
        <button>Update Times</button>
      </form>
    </>
  )
}