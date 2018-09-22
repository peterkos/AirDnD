

import Firebase from 'firebase'

// Initialization of Firebase
let config = {
		apiKey: "AIzaSyAAEFPOxnjvOVq15GryE8at47-BDCzhvWo",
		authDomain: "anotherdnd.firebaseapp.com",
		databaseURL: "https://anotherdnd.firebaseio.com",
		projectId: "anotherdnd",
		storageBucket: "anotherdnd.appspot.com",
		messagingSenderId: "149181052700"
	}

let app = Firebase.initializeApp(config)

const db = app.database()
export default db
