import { useState, useEffect } from 'react'
import { useAddRating } from '../../hooks/useAddRating'
import { useAddReview } from '../../hooks/useAddReview'
import { useAuthContext } from '../../hooks/useAuthContext'
//import PhoneInput from 'react-phone-input-2'
import { useFirestore } from '../../hooks/useFirestore'




export default function AddRating({ uid }) {
  const { user } = useAuthContext()
  const [rating, changeRating] = useState('')
  const [review, changeReview] = useState('')
  const { addRating } = useAddRating()
  const { addReview } = useAddReview()

//   const { editUser, updateName } = useFirestore('PersonalInfo')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Rating has been added " + rating);
    if (rating < 1 || rating > 5) {
        alert("Rating is out of range");
        return;
    }
    try {
        addRating(rating, uid);
        if (review != "") {
            addReview(review, uid);
        }
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
        <label>
          <span>Add Review:</span>
          <input 
            type="text"
            required
            onChange={e => changeReview(e.target.value)}
            value={review} 
          />
        </label>
        <button>Add Review</button>
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