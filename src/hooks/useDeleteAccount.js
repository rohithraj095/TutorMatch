import { useState, useEffect } from 'react'
import { projectAuth } from '../firebase/config'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from './useAuthContext'

export const useDeleteAccount = () => {
  const { user } = useAuthContext()
  const { logout } = useLogout()
  
  const deleteAcc = async () => {

    user.delete().then(() => {
        // User deleted.
        console.log("user deleted")
        logout();
        
      }).catch((error) => {
        console.log("some error")
      });
    try {
      // sign the user out
      console.log("delete called")

    } 
    catch(err) {
        console.log("error")
    }
  }
  return { deleteAcc }
}