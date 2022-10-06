import { useState, useEffect } from 'react'
import { useEditEmail } from '../../hooks/useEditEmail'


export default function EditEmail({ uid }) {
  const [newEmail, setNewEmail] = useState('')
  const [providedPassword, setProvidedPassword] = useState('')
  const { editEmail } = useEditEmail()

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
        editEmail(newEmail, providedPassword);
    }
    catch(err) {
        console.log("error in new email")
        console.log(err.message);
    }
    
    
    
  }

  return (
    <>
      <h4>Edit Email</h4>
      <form onSubmit={handleSubmit}>
        <label>
          <span>new Email:</span>
          <input 
            type="text"
            required
            onChange={e => setNewEmail(e.target.value)}
            value={newEmail} 
          />
        </label>
        <label>
            <span>re-enter password:</span>
            <input 
                type="password"
                required
                onChange={e => setProvidedPassword(e.target.value)}
                value={providedPassword} 
            />
        </label>
        <button>update email address</button>
      </form>
    </>
  )
}