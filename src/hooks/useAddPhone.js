import { useState, useEffect } from 'react'
import firebase from 'firebase/app'
import {projectFirestore} from '../firebase/config'
import { useAuthContext } from './useAuthContext'

export const useAddPhone = () => {
  const { user } = useAuthContext()
  
  const addPhone = async (phoneNum) => {

    try {
      console.log("trying to update phone num")
      var reload = true;

      await projectFirestore.collection("users").doc(user.uid).update({
        cellNum: phoneNum
      });

      //await user.updateProfile({ phoneNum })
      if (reload) {
        window.location.reload(false);
        console.log("fully updated username to " + phoneNum)
      } else {
        console.log("old phone is same as new phone")
        alert("old phone is same as new phone");
      }
    }
    catch(err) {
      console.log(err.message)
    }

    
  }
  return { addPhone }
}