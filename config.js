// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4bguGRa3TAbFlyeN9hMUnmuBVjyixl6w",
  authDomain: "exampleproject-4936e.firebaseapp.com",
  projectId: "exampleproject-4936e",
  storageBucket: "exampleproject-4936e.appspot.com",
  messagingSenderId: "7959950249",
  appId: "1:7959950249:web:b65fc5539a806eb9390ab8",
  measurementId: "G-D7J2NESJV8"
}; 
//initialize firebase 
firebase.initializeApp(firebaseConfig);

// make auth firestore ref
const auth = firebase.auth()
const db = firebase.firestore()
const analytics = firebase.analytics();
