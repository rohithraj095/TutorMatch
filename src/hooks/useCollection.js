import { useEffect, useState, useRef } from "react"
import { projectFirestore } from "../firebase/config"

export const useCollectionSimple = (collection, uid) => {
  const [documents, setDocuments] = useState(null)
  //const [tO, settO] = useState(null)

  const tO = projectFirestore.collection(collection).doc(uid).get();
 // console.log("received from search: " + tO)
  // useEffect(() => {
  //   const ref = await projectFirestore.collection(collection).doc(uid).get()
  //   settO(ref)
  //   console.log("value from simple tO: " + tO)
  // }, [collection, uid])

  return tO;
}

export const useCollection = (collection, _query, _orderBy) => {
  const [documents, setDocuments] = useState(null)
  const [error, setError] = useState(null)

  // stop infinite loop
  const query = useRef(_query).current
  const orderBy = useRef(_orderBy).current

  useEffect(() => {
    let ref = projectFirestore.collection(collection)

    if (query) {
        ref = ref.where(...query)
    }

    if (orderBy) {
        ref = ref.orderBy(...orderBy)
    }

    const unsubscribe = ref.onSnapshot(snapshot => {
      let results = []
      var count = 0;
      snapshot.docs.forEach(doc => {
        console.log("pushing some doc: " + doc.data().cellNum)
        count = results.push({...doc.data(), id: doc.id})
      });
      //console.log("users: " + results.at(0).cellNum + " " + count)
      
      // update state
      setDocuments(results)
      setError(null)
    }, error => {
      console.log(error)
      setError('could not fetch the data')
    })

    // unsubscribe on unmount
    return () => unsubscribe()

  }, [collection, query, orderBy])

  return { documents, error }
}