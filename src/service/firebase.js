
import firebase from 'firebase/app';

import 'firebase/database'


const firebaseConfig = {
    apiKey: "AIzaSyB3IDhNoaFIAXsD_YOFXkuJ7PLGlVSc0rU",
    authDomain: "crud-54a54.firebaseapp.com",
    databaseURL: "https://crud-54a54-default-rtdb.firebaseio.com",
    projectId: "crud-54a54",
    storageBucket: "crud-54a54.appspot.com",
    messagingSenderId: "424634041797",
    appId: "1:424634041797:web:bcfd21711b870ef84d37ac"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

const database = firebase.database();


export { database, firebase }