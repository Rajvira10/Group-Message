import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = ({
    apiKey: "AIzaSyCT9H2OUW4KDw8-1JXSZ8_gyDeb1O_E244",
    authDomain: "messenger-clone-2010d.firebaseapp.com",
    projectId: "messenger-clone-2010d",
    storageBucket: "messenger-clone-2010d.appspot.com",
    messagingSenderId: "482551146626",
    appId: "1:482551146626:web:9d1c8d02410047469a6c9b",
    measurementId: "G-HCMRZQXTM8"
  });

const db = firebase.initializeApp(firebaseConfig);

export default db;