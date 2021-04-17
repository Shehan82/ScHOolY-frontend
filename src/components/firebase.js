import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAV34JI2ZrqEIHykRsZWjQLnmNvibMNkc0",
  authDomain: "schooly-authentication.firebaseapp.com",
  projectId: "schooly-authentication",
  storageBucket: "schooly-authentication.appspot.com",
  messagingSenderId: "176607731238",
  appId: "1:176607731238:web:7483421a76f41955c550e7",
});

export const auth = app.auth();
export default app;
