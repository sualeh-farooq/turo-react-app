import { initializeApp } from "firebase/app";
import { getAuth , createUserWithEmailAndPassword  , signInWithEmailAndPassword} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBBWFsC6-xfZGajqVX0UiQiRscil-3hLK8",
  authDomain: "turo-car-booking.firebaseapp.com",
  projectId: "turo-car-booking",
  storageBucket: "turo-car-booking.appspot.com",
  messagingSenderId: "845632907327",
  appId: "1:845632907327:web:dc9f6b6136b10eac8eb08a"
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)