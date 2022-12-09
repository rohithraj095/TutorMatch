import {projectFirestore} from '../firebase/config'
import { useAuthContext } from './useAuthContext'

export const useHideProfile = () => {
  const { user } = useAuthContext()
  
  const hideProfile = async (hPro) => {

    try {
      console.log("trying to hide profile")
      var reload = true;

      await projectFirestore.collection("users").doc(user.uid).update({
        hideProfile: hPro
      });

      if (reload) {
        window.location.reload(false);
        console.log("fully updated hide status to " + hPro)
      } else {
        alert("old bio is same as new bio");
      }
    }
    catch(err) {
      console.log(err.message)
    }

    
  }
  return { hideProfile }
}