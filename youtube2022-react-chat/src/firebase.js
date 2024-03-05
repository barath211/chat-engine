import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBY3Vn2hxavLedTW9XCyjhTOt5Q97kcYs",
  authDomain: "messenger-a80d4.firebaseapp.com",
  projectId: "messenger-a80d4",
  storageBucket: "messenger-a80d4.appspot.com",
  messagingSenderId: "240064954089",
  appId: "1:240064954089:web:e171ef5ee4da05ea4aba78"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app)
