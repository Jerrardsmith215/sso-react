import { useState, useEffect, useContext, createContext } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

// env variables
const apiKey = process.env.REACT_APP_API_KEY;
const authDomain = process.env.REACT_APP_AUTH_DOMAIN;
const projectId = process.env.REACT_APP_PROJECT_ID;
const storageBucket = process.env.REACT_APP_STORAGE_BUCKET;
const messagingSenderId = process.env.REACT_APP_MSG_ID;
const appId = process.env.REACT_APP_APPID;

// firebase configuration
const firebaseConfig = {
    apiKey: apiKey,
    authDomain: authDomain,
    projectId: projectId,
    storageBucket: storageBucket,
    messagingSenderId: messagingSenderId,
    appId: appId
};

// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);

// create Authentication context
export const AuthContext = createContext();

export const AuthContextProvider = props => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const unsubscribe = firebaseApp.auth().onAuthStateChanged(setCurrentUser);
        return () => unsubscribe();
    }, []);

    return <AuthContext.Provider value={{ currentUser }} {...props} />
}

export const useAuthState = () => {
    const auth = useContext(AuthContext);
    const authenticated = auth.currentUser ? true : false;
    return { ...auth, isAuthenticated: authenticated }
}