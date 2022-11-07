import { useState } from 'react'
import {projectFirestore} from '../firebase/config'
import { useAuthContext } from './useAuthContext'


export const useAddReview = () => {
  const { user } = useAuthContext()
  //const {newRating, setRating } = useState('')

  
  const addReview = async (review, tutorid) => {
    //Code for attempting to average ratings
    /*const tO  = useCollectionSimple(
      'users',
      tutorid
    )
    tO.then((val) => 
      setRating(val.data().totalRating + rating)
    ).catch( (error) => {
      console.log("non existing")
      }
    );*/

    try {
      console.log("trying to add review")
      var reload = true;

      /*await projectFirestore.collection("users_tutor_rating").doc(tutorid).update({
        [user.uid]: rating
      });
      projectFirestore.collection("users_tutor_rating").doc(tutorid).get(tutorid);*/

      /*const tO  = useCollectionSimple(
        'user_tutor_rating',
        tutorid
      )
      tO.then((val) => 
        setCellNo(val.data().cellNum)
      ).catch( (error) => {
        console.log("non existing")
      }
      );*/

      /*await projectFirestore.collection("users").doc(tutorid).update({
        totalRating: totalRating + rating
      });*/

      //projectFirestore.collection("users_tutor_rating").doc(tutorid).get(tutorid);
      //console.log()
      
      

      await projectFirestore.collection("users").doc(tutorid).update({
        userReview: review
      });

      if (reload) {
        window.location.reload(false);
        console.log("fully updated rating to " + review)
      } else {
        alert("old bio is same as new bio");
      }
    }
    catch(err) {
      console.log(err.message)
    }

    
  }
  return { addReview }
}