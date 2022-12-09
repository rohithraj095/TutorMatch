import { useState, useEffect } from 'react'
import { useHideProfile } from '../../hooks/useHideProfile'
//import PhoneInput from 'react-phone-input-2'
import { useFirestore } from '../../hooks/useFirestore'
import userEvent from '@testing-library/user-event'
import { useAuthContext } from '../../hooks/useAuthContext'



export default function HideProfile({ uid }) {
  const [hPro, setHPro] = useState('')
  const { hideProfile } = useHideProfile()
  const { user } = useAuthContext()
//   const { editUser, updateName } = useFirestore('PersonalInfo')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Hide Profile has been updated " + hPro);
    try {
        hideProfile(hPro);
    }
    catch(err) {
        console.log("error in Hide Status")
        console.log(err.message);
    }
    
    
    
  }

  return (
    <>
      <h4>Hide Profile</h4>
      <form onSubmit={handleSubmit}>
        <label>
        <span>Hidden: {user.hideProfile}</span>
            <input type="radio" value="true" name="hideProfile" onChange= {(e) => setHPro(e.target.value)} /> Hide
            <input type="radio" value="false" name="hideProfile" onChange= {(e) => setHPro(e.target.value)} /> Don't Hide
        </label>
        <button>Update</button>
      </form>
    </>
  )
}