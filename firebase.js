import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAj4bQgJnCeL21C04iG92oSl2T54oXOsng",
    authDomain: "facebookclone-99211.firebaseapp.com",
    projectId: "facebookclone-99211",
    storageBucket: "facebookclone-99211.appspot.com",
    messagingSenderId: "260513753383",
    appId: "1:260513753383:web:8cfcf5f32fc7bda926e102"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };