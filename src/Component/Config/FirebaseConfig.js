import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyB5BBiQgMS8MCfBle5-uWrkvzmCgBfOOhs",
  authDomain: "react-firebase-91120.firebaseapp.com",
  databaseURL: "https://react-firebase-91120-default-rtdb.firebaseio.com",
  projectId: "react-firebase-91120",
  storageBucket: "react-firebase-91120.appspot.com",
  messagingSenderId: "438204415150",
  appId: "1:438204415150:web:48dcd1565516cc3dc0c13f",
};
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
