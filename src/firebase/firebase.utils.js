import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCCi3zj_YEZowBIsJttua6RFw4_nl8omLs",
  authDomain: "react2020-be1b7.firebaseapp.com",
  databaseURL: "https://react2020-be1b7.firebaseio.com",
  projectId: "react2020-be1b7",
  storageBucket: "react2020-be1b7.appspot.com",
  messagingSenderId: "1024534382382",
  appId: "1:1024534382382:web:9a5d4965cf838c0e111cbf",
  measurementId: "G-03ZPXCB16B"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
