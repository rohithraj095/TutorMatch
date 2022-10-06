import { useState, useEffect } from 'react'
import { useEditUsername } from '../../hooks/useEditUsername'
//import PhoneInput from 'react-phone-input-2'
import { useFirestore } from '../../hooks/useFirestore'


export default function EditUsername({ uid }) {
  const [newName, setNewName] = useState('')
  const { editUsername } = useEditUsername()
//   const { editUser, updateName } = useFirestore('PersonalInfo')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Username has been updated " + newName);
    try {
        editUsername(newName);
    }
    catch(err) {
        console.log("error in eUsername")
        console.log(err.message);
    }
    
    
    
  }

  return (
    <>
      <h4>Edit Username</h4>
      <form onSubmit={handleSubmit}>
        <label>
          <span>new username:</span>
          <input 
            type="text"
            required
            onChange={e => setNewName(e.target.value)}
            value={newName} 
          />
        </label>
        <button>update name</button>
      </form>
    </>
  )
}