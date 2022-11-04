import { useState, useEffect } from 'react'
import { useAddRating } from '../../hooks/useAddRating'
import { useAuthContext } from '../../hooks/useAuthContext'
//import PhoneInput from 'react-phone-input-2'
import { useFirestore } from '../../hooks/useFirestore'




export default function AddRating({ uid }) {
  const { user } = useAuthContext()
  const [rating, changeRating] = useState('')
  const { addRating } = useAddRating()

//   const { editUser, updateName } = useFirestore('PersonalInfo')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Rating has been added " + rating);
    
    try {
        addRating(rating, uid);
    }
    catch(err) {
        console.log("error in rating")
        console.log(err.message);
    }
    
    
    
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Add Rating:</span>
          <input 
            type="text"
            required
            onChange={e => changeRating(e.target.value)}
            value={rating} 
          />
        </label>
        <button>Add Rating</button>
      </form>
    </>
  )
}

//For multiple choice seletion
/*<input type="radio" value="1" name="tutor" onChange= {(e) => changeRating(e.target.value)} />1
          <input type="radio" value="2" name="tutor" onChange= {(e) => changeRating(e.target.value)} />2
          <input type="radio" value="3" name="tutor" onChange= {(e) => changeRating(e.target.value)} />3
          <input type="radio" value="4" name="tutor" onChange= {(e) => changeRating(e.target.value)} />4
          <input type="radio" value="5" name="tutor" onChange= {(e) => changeRating(e.target.value)} />5*/