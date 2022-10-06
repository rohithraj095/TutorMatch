import { useState, useEffect } from 'react'
//import PhoneInput from 'react-phone-input-2'
import { useFirestore } from '../../hooks/useFirestore'

export default function ClassEntryForm({ uid }) {
  const [name, setName] = useState('')
  const [courseCode, setCourseCode] = useState('')
  const { addDocument, response } = useFirestore('Classes')

  const handleSubmit = (e) => {
    e.preventDefault()
    addDocument({
        uid, 
        name, 
        courseCode
      })
  }

  useEffect(() => {
    if (response.success) {
      setName('')
      setCourseCode('')
    }
  }, [response.success])

  return (
    <>
      <h4>Add class</h4>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Course Name:</span>
          <input 
            type="text"
            required
            onChange={(e) => setName(e.target.value)} 
            value={name} 
          />
        </label>
        <label>
          <span>Course Code:</span>
          <input
            type="text"
            required
            onChange={(e) => setCourseCode(e.target.value)} 
            value={courseCode} 
          />
        </label>
        <button>Add Class</button>
      </form>
    </>
  )
}