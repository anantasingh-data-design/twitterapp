import firebase from 'firebase/compat/app';

import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBGt2mgmhbFcJjvLbAizIw9NjlJXSRsuqA",
    authDomain: "twitterappbuild.firebaseapp.com",
    projectId: "twitterappbuild",
    storageBucket: "twitterappbuild.appspot.com",
    messagingSenderId: "326526487557",
    appId: "1:326526487557:web:ab4a3544fb9ac193e6206c",
    measurementId: "G-J1EJTWV4Z9",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;