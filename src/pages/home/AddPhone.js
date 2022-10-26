import { useState, useEffect } from 'react'
import { useAddPhone } from '../../hooks/useAddPhone'
//import PhoneInput from 'react-phone-input-2'
import { useFirestore } from '../../hooks/useFirestore'


export default function AddPhone({ uid }) {
  const [newNum, setNewNum] = useState('')
  const { addPhone } = useAddPhone()
//   const { editUser, updateName } = useFirestore('PersonalInfo')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Phone number has been updated " + newNum);
    try {
        addPhone(newNum);
    }
    catch(err) {
        console.log("error in eUsername")
        console.log(err.message);
    }
    
    
    
  }

  return (
    <>
      <h4>Update Phone Number</h4>
      <form onSubmit={handleSubmit}>
        <label>
          <span>phone num:</span>
          <input 
            type="tel"
            required
            onChange={e => setNewNum(e.target.value)}
            value={newNum} 
          />
        </label>
        <button>Update number</button>
      </form>
    </>
  )
}