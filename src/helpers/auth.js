import {firebaseAuth, googleProvider} from "../config/constants";

export function googleLogin() {
    loginWithFirebase(googleProvider);
}

function loginWithFirebase(provider) {
    firebaseAuth().signInWithPopup(provider).then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const token = result.credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
        console.log("google login success. token=", token, ",user=", JSON.stringify(user));
    }).catch(function (error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
        // ...
        console.log("google login failed.reason=", errorMessage);
    });
}

export function logout() {
    return firebaseAuth().signOut();
}

