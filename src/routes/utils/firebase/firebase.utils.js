import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBGvqk9QPv5aUxgWB37Cu7xuMmdnlJ4LDg",
  authDomain: "fir-reactjs-clothing.firebaseapp.com",
  projectId: "fir-reactjs-clothing",
  storageBucket: "fir-reactjs-clothing.appspot.com",
  messagingSenderId: "685404804976",
  appId: "1:685404804976:web:4df9efaff98d0a654ba1b5",
};

// Initialize Firebase
const fireBaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePoup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth.user) {
    return;
  }

  const userDocRef = doc(db, "users", userAuth.user.uid);
  console.log(userDocRef);

  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot);
  console.log(userSnapShot.exists());

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth.user;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("err creating the user", error.messagge);
    }
  }

  return userDocRef;
};
