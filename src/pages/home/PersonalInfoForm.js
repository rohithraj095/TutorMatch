import { useState, useEffect } from 'react'
//import PhoneInput from 'react-phone-input-2'
import { useFirestore } from '../../hooks/useFirestore'

export default function PersonalInfoForm({ uid }) {
  const [name, setName] = useState('')
  const [phonenumber, setPhoneNumber] = useState('')
  const { addDocument, response } = useFirestore('PersonalInfo')

  const handleSubmit = (e) => {
    e.preventDefault()
    addDocument({
        uid, 
        name, 
        phonenumber
      })
  }

  useEffect(() => {
    if (response.success) {
      setName('')
      setPhoneNumber('')
    }
  }, [response.success])

  return (
    <>
      <h3>Add Personal Info</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Name:</span>
          <input 
            type="text"
            required
            onChange={(e) => setName(e.target.value)} 
            value={name} 
          />
        </label>
        <label>
          <span>Phone number (###-###-####):</span>
          <input
            type="number"
            required
            onChange={(e) => setPhoneNumber(e.target.value)} 
            value={phonenumber} 
          />
        </label>
        <button>Add Info</button>
      </form>
    </>
  )
}