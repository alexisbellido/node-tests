import Rebase from "re-base";
import firebase from "firebase";

// get config details from Firebase > Project Overview > Add Firebase to your web app
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCtigX8f6TJ6j3WSrboe8brbZWDQvxgxcc",
  authDomain: "test-project-1debb.firebaseapp.com",
  databaseURL: "https://test-project-1debb.firebaseio.com/"
});

// see https://github.com/tylermcginnis/re-base
const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
