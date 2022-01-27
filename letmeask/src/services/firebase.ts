//import firebase from 'firebase/app';
import firebase from 'firebase/compat/app';
//import 'firebase/auth';
import 'firebase/compat/auth';
//import 'firebase/database';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB-N_grwq5MygZwJyrRF_ZOOfC55uVHlRc",
    authDomain: "letmeask-a6a63.firebaseapp.com",
    databaseURL: "https://letmeask-a6a63-default-rtdb.firebaseio.com",
    projectId: "letmeask-a6a63",
    storageBucket: "letmeask-a6a63.appspot.com",
    messagingSenderId: "646889884049",
    appId: "1:646889884049:web:bb70d11938c24aca90b230"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();