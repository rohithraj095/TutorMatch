import { useState, useEffect } from 'react'
import { useAddBio } from '../../hooks/useAddBio'
//import PhoneInput from 'react-phone-input-2'
import { useFirestore } from '../../hooks/useFirestore'


export default function AddPhone({ uid }) {
  const [pBio, setPbio] = useState('')
  const { addBio } = useAddBio()
//   const { editUser, updateName } = useFirestore('PersonalInfo')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("personal bio has been updated " + pBio);
    try {
        addBio(pBio);
    }
    catch(err) {
        console.log("error in eUsername")
        console.log(err.message);
    }
    
    
    
  }

  return (
    <>
      <h4>Update Personal Bio</h4>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Personal Bio:</span>
          <input 
            type="text"
            required
            onChange={e => setPbio(e.target.value)}
            value={pBio} 
          />
        </label>
        <button>Update Personal Bio</button>
      </form>
    </>
  )
}