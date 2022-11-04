import {projectFirestore} from '../firebase/config'
import { useAuthContext } from './useAuthContext'

export const useAddTimeSlot = () => {
  const { user } = useAuthContext()
  
  const addTimeSlot = async (begin, end) => {

    try {
      console.log("trying to add time slots")
      var reload = true;

      await projectFirestore.collection("users").doc(user.uid).update({
        beginTime: begin,
        endTime: end
      });

      if (reload) {
        window.location.reload(false);
        console.log("fully updated time slot to " + begin + end)
      } else {
        alert("old time slot same as new time slot");
      }
    }
    catch(err) {
      console.log(err.message)
    }

    
  }
  return { addTimeSlot }
}