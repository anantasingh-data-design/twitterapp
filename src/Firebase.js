import firebase from 'firebase/compat/app';

import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBGt2LbAizIw9NjlJXSRsuqA",
    authDomain: "twitterappbuild.firebaseapp.com",
    projectId: "twitterappbuild",
    storageBucket: "twitterappbuild.appspot.com",
    messagingSenderId: "326557",
    appId: "1:326557:web:ab4ac193e6206c",
    measurementId: "G-J1EZ9",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
