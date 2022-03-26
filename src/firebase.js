import firebase from "firebase"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcgiftuDKQ6CBfkpw0o7y6ksGEKACHNmc",
  authDomain: "mapprj-7679d.firebaseapp.com",
  projectId: "mapprj-7679d",
  storageBucket: "mapprj-7679d.appspot.com",
  messagingSenderId: "692507970109",
  appId: "1:692507970109:web:ef96a8fc800e87a0693854",
  measurementId: "G-34GW4WJB4H"
};
  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth =firebase.auth();
  const provider= new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage()
  export {auth, provider,storage};
  export default db;