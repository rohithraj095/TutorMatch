import {projectFirestore} from '../firebase/config'
import { useAuthContext } from './useAuthContext'

export const useAddBio = () => {
  const { user } = useAuthContext()
  
  const addBio = async (pBio) => {

    try {
      console.log("trying to add personal bio")
      var reload = true;

      await projectFirestore.collection("users").doc(user.uid).update({
        personalBio: pBio
      });

      if (reload) {
        window.location.reload(false);
        console.log("fully updated username to " + pBio)
      } else {
        alert("old bio is same as new bio");
      }
    }
    catch(err) {
      console.log(err.message)
    }

    
  }
  return { addBio }
}