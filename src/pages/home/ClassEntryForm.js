import { useState, useEffect } from 'react'
//import PhoneInput from 'react-phone-input-2'
import { useFirestore } from '../../hooks/useFirestore'

export default function ClassEntryForm({ uid }) {
  const [name, setName] = useState('')
  const [courseCode, setCourseCode] = useState('')
  const [isTutor, setIsTutor] = useState('')
  const { addDocument, response } = useFirestore('Classes')

  const handleSubmit = (e) => {
    e.preventDefault()
    addDocument({
        uid, 
        name, 
        courseCode,
        isTutor
      })
  }

  useEffect(() => {
    if (response.success) {
      setName('')
      setCourseCode('')
      setIsTutor('')
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
        <input type="radio" value="Need Tutoring" name="tutor" onChange= {(e) => setIsTutor(e.target.value)} />I require tutoring in this class
        <input type="radio" value="Can Tutor Others" name="tutor" onChange= {(e) => setIsTutor(e.target.value)} /> I can tutor others in this class
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