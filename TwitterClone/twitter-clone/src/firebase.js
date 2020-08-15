import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCOHbTZ2UexmaGvTF56WhTnwtnZEfjjiNE",
    authDomain: "twitter-clone-ab4b2.firebaseapp.com",
    databaseURL: "https://twitter-clone-ab4b2.firebaseio.com",
    projectId: "twitter-clone-ab4b2",
    storageBucket: "twitter-clone-ab4b2.appspot.com",
    messagingSenderId: "557639695535",
    appId: "1:557639695535:web:374c6b2b3f60b4fc18a85a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;