import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyCFRg1l-4N6JAhkLq4m33VDNtiTJPETlVs",
    authDomain: "hhimanshu-test.firebaseapp.com",
    databaseURL: "https://hhimanshu-test.firebaseio.com",
};

firebase.initializeApp(config);

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;