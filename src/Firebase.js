import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBigUk5WGXgtR7FUJrcobtgkzOYWv1Wx2o",
  authDomain: "facebook-clone-e22d7.firebaseapp.com",
  databaseURL: "https://facebook-clone-e22d7.firebaseio.com",
  projectId: "facebook-clone-e22d7",
  storageBucket: "facebook-clone-e22d7.appspot.com",
  messagingSenderId: "174482984391",
  appId: "1:174482984391:web:d2954545a508c0528a9de2",
  measurementId: "G-70LNNG4RCP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
