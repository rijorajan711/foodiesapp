
import {initializeApp} from "firebase/app";
import {getAuth,GoogleAuthProvider,signInWithPopup} from'firebase/auth'
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyCbw-kHWGLTZciFSUxc_-SVEqabmZbPZPc",
  authDomain: "takefood-12cee.firebaseapp.com",
  projectId: "takefood-12cee",
  storageBucket: "takefood-12cee.appspot.com",
  messagingSenderId: "96257527774",
  appId: "1:96257527774:web:a570d7cfe7c381f334974f"
};



 const app=initializeApp(firebaseConfig)
export const auth=getAuth(app)
export const googleAuthProvider = new GoogleAuthProvider();


  