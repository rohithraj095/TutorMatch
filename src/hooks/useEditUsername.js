import { useState, useEffect } from 'react'
import { projectAuth } from '../firebase/config'
import { useAuthContext } from './useAuthContext'

export const useEditUsername = () => {
  const { user } = useAuthContext()
  
  const editUsername = async (displayName) => {

    try {
      console.log("trying to update username")
      var reload = true;
      if (user.displayName === displayName) {
        reload = false; 
      }
      await user.updateProfile({ displayName })
      if (reload) {
        window.location.reload(false);
        console.log("fully updated username to " + displayName)
      } else {
        console.log("old username is same as new username")
        alert("old username is same as new username");
      }
    }
    catch(err) {
      console.log(err.message)
    }

    
  }
  return { editUsername }
}