import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from './firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // signin with google
    const googleProvider = new GoogleAuthProvider();
    const loginWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    // login with email and pass
    const userLogin = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // create a new user with email pass
    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // update user profile
    const updateUserInfo = (name, photo) =>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }
    // manage loggin user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }, [])
    // signout
    const logOut = () => {
        return signOut(auth)
    }
    const authInfo = {
        user,
        loading,
        userLogin,
        loginWithGoogle,
        createUser,
        updateUserInfo,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;