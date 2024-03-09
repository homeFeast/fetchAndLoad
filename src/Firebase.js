// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBV6slsAp5C7iVTtznRyfcgeNU3rk4Nk_4",
  authDomain: "homefeast-8b420.firebaseapp.com",
  projectId: "homefeast-8b420",
  storageBucket: "homefeast-8b420.appspot.com",
  messagingSenderId: "179323017631",
  appId: "1:179323017631:web:4e57fcddd065a79a94c5aa",
  measurementId: "G-3KE8PDKB5D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};