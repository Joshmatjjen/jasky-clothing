import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCG6oVKoJ3GErHK-B0iNeKWOSVYkxh671c",
  authDomain: "j-clothing-db.firebaseapp.com",
  databaseURL: "https://j-clothing-db.firebaseio.com",
  projectId: "j-clothing-db",
  storageBucket: "",
  messagingSenderId: "587370945130",
  appId: "1:587370945130:web:8424c7e1afcfda11b30813",
  measurementId: "G-M4ZRSZPNDR"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;