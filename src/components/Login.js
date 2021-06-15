import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { firebaseApp } from './auth/AuthProvider';
import firebase from 'firebase/app';

// firebase UI configuration 
const firebaseUiConfig = {
    signInFlow: 'redirect',
    signInSuccessUrl: '/success',
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
};

function Login() {
    return (
        <div className="container text-center p-5">
            <p>Hello World!</p>
            <p>To see something special, log in and you will be directed to /success</p>
            <p>if you try to visit this endpoint without being logged in, the content will not be shared.</p>
            <StyledFirebaseAuth uiConfig={firebaseUiConfig} firebaseAuth={firebaseApp.auth()} />
        </div>
    )
}

export default Login;