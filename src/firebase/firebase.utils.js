import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBRp8LNwxwxeNyl5psNF0jKGvIt-DX31VA",
  authDomain: "crwn-db-33450.firebaseapp.com",
  databaseURL: "https://crwn-db-33450.firebaseio.com",
  projectId: "crwn-db-33450",
  storageBucket: "crwn-db-33450.appspot.com",
  messagingSenderId: "431768473457",
  appId: "1:431768473457:web:bed581fde66b04194bb0d0"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({  prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;