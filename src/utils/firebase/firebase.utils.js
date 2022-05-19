// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDL6NWiScHAuad5_csIWpdcP3NGK6foj18",
  authDomain: "covetousgoblin.firebaseapp.com",
  projectId: "covetousgoblin",
  storageBucket: "covetousgoblin.appspot.com",
  messagingSenderId: "142108000084",
  appId: "1:142108000084:web:f8b196ff1339be426712c1",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDoc = async (user) => {
  const userRef = await doc(db, "users", user.uid);
  const userSnapshot = await getDoc(userRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = user;
    const createdAt = new Date();
    setDoc(userRef, { displayName, email, createdAt }).catch((error) =>
      console.log(`Error creating user: ${error}`)
    );
  }
  return userRef;
};

export const createCommonUser = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInCommonUser = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
}
