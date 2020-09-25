import React from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
export const initializeLoginFramework = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
}

export const handleGoogleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(googleProvider)
        .then(res => {
            var { displayName, email } = res.user;
            const signnedInUser = {
                isSignedIn: true,
                name: displayName
            }
            return (signnedInUser);
        })
}
const LoginManager = () => {
    return (
        <div>

        </div>
    );
};

export default LoginManager;