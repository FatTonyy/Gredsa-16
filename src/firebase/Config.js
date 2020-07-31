/* eslint-disable no-undef */
import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyCv2DfgNw8uvk8lNtYDJNzc_UNxkHhU-mI",
	authDomain: "gredsa-de298.firebaseapp.com",
	databaseURL: "https://gredsa-de298.firebaseio.com",
	projectId: "gredsa-de298",
	storageBucket: "gredsa-de298.appspot.com",
	messagingSenderId: "357635055937",
	appId: "1:357635055937:web:b10e3a1edc1a22509f81c0",
	measurementId: "G-M0E1BEF4PL",
};
// Initialize Firebase
// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

// initialize firebase storage
const projectStorage = firebase.storage();
// initialize firebaseStore
const projectFirestore = firebase.firestore();
// creating firebase timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
