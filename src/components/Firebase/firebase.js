// ------------------------------------------------------------------------- //
import app from "firebase/app";
import "firebase/auth";
import "firebase/database";

require("dotenv").config();

// var firebaseConfig = {
//   apiKey: "AIzaSyATwOKvHYIVmryHs7w-cuzewqMXkcsjT1k",
//   authDomain: "react-firebase-auth-app-c39f5.firebaseapp.com",
//   databaseURL: "https://react-firebase-auth-app-c39f5.firebaseio.com",
//   projectId: "react-firebase-auth-app-c39f5",
//   storageBucket: "react-firebase-auth-app-c39f5.appspot.com",
//   messagingSenderId: "116258933712",
//   appId: "1:116258933712:web:1f20f34dc1b193ed8cc7d5"
// };

const config = {
  apiKey: "AIzaSyATwOKvHYIVmryHs7w-cuzewqMXkcsjT1k",
  authDomain: "react-firebase-auth-app-c39f5.firebaseapp.com",
  databaseURL: "https://react-firebase-auth-app-c39f5.firebaseio.com",
  projectId: "react-firebase-auth-app-c39f5",
  storageBucket: "react-firebase-auth-app-c39f5.appspot.com",
  messagingSenderId: "116258933712",
  appId: "1:116258933712:web:1f20f34dc1b193ed8cc7d5"

  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // databaseURL: process.env.REACT_APP_DATABASE_URL,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_APPID
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.database();
  }

  // *** Auth API ***
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

  // *** User API ***
  user = uid => this.db.ref(`users/${uid}`);
  users = () => this.db.ref("users");
}

export default Firebase;
