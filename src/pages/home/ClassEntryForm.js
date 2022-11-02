import { useState, useEffect } from 'react'
//import PhoneInput from 'react-phone-input-2'
import { useFirestore } from '../../hooks/useFirestore'

export default function ClassEntryForm({ uid, userName }) {
  const [name, setName] = useState('')
  //const [userName, setuserName] = useState('')
  const [courseDept, setCourseDept] = useState('')
  const [isTutor, setIsTutor] = useState('')
  const { addDocument, response } = useFirestore('Classes')


  const handleSubmit = (e) => {
    e.preventDefault()
    addDocument({
        uid,
        userName,
        name, 
        courseDept,
        isTutor
      })
  }

  useEffect(() => {
    if (response.success) {
      setName('')
      setCourseDept('')
      setIsTutor('')
    }
  }, [response.success])

  return (
    <>
      <h4>Add class</h4>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Course Code/Name:</span>   
          <input 
            type="text"
            required
            onChange={(e) => setName(e.target.value)} 
            value={name} 
          />
        </label>    
        <label>
        <input type="radio" value="Need Tutor" name="tutor" onChange= {(e) => setIsTutor(e.target.value)} />I require tutoring in this class
        <input type="radio" value="Tutor Others" name="tutor" onChange= {(e) => setIsTutor(e.target.value)} /> I can tutor others in this class
        </label>
        <label>
          <span>Course Dept.:</span>
          <input
            type="text"
            required
            onChange={(e) => setCourseDept(e.target.value)} 
            value={courseDept} 
          />
        </label>
        

        <button>Add Class</button>
      </form>
    </>
  )
}