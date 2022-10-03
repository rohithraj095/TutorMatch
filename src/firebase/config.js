import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDTzVm_lNmRO_PC2KYnXCxWDquDOt0T0D0",
    authDomain: "tutormatch-8d4b4.firebaseapp.com",
    projectId: "tutormatch-8d4b4",
    storageBucket: "tutormatch-8d4b4.appspot.com",
    messagingSenderId: "634131387501",
    appId: "1:634131387501:web:8b433b994232e608e39b64",
    measurementId: "G-6PW7NYD5X9"
  };

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }