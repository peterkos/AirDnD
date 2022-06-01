

import Firebase from 'firebase/app'
import 'firebase/database'

// Initialization of Firebase

const firebaseConfig = {
  apiKey: "AIzaSyAAEFPOxnjvOVq15GryE8at47-BDCzhvWo",
  authDomain: "anotherdnd.firebaseapp.com",
  databaseURL: "https://anotherdnd.firebaseio.com",
  projectId: "anotherdnd",
  storageBucket: "anotherdnd.appspot.com",
  messagingSenderId: "149181052700",
  appId: "1:149181052700:web:4bfa86f2ebc2b703026cd9"

};



let app = Firebase.initializeApp(config)

const db = app.database()
export default db
