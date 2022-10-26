import { useAuthContext } from './useAuthContext'
import firebase from 'firebase/app'
import { auth } from '../firebase/config'
// import {
//     EmailAuthProvider,
//     getAuth,
//     reauthenticateWithCredential, } from 'firebase/auth'

export const useEditEmail = () => {
  const { user } = useAuthContext()
 
  
  const editEmail = async (email, providedPassword) => {

    try {
      console.log("trying to update email address")
      var reload = true;
      if (user.email === email) {
        reload = false; 
      }
      //building credentials to reauthenticate
      const credential = firebase.auth.EmailAuthProvider.credential(
        user.email,
        providedPassword
      )
      //running reauthentication function to allow for email address change
      const result = await user.reauthenticateWithCredential(
        credential
      )
      console.log("reauthenticated")
    
      //perform actual email update
      await user.updateEmail(email)
      if (reload) {
        window.location.reload(false);
        console.log("fully updated email to " + email)
      } else {
        console.log("old email is same as new email")
        alert("old email is same as new email");
      }
    }
    catch(err) {
      console.log(err.message)
    }

    
  }
  return { editEmail }
}