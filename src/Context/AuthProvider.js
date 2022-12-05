import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../Firabase/Firebase.config';



export const AuthContext = createContext();

const auth = getAuth(app)


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setloading] = useState(true)

    const createUser = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setloading(true)
        signOut(auth)
    }

    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo)
    }

    const loginUser = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user obsrabe')
            setUser(currentUser)
            setloading(false)
        })
        return () => unsubscribe
    }, [])

    const authInfo ={
        createUser,
        loginUser,
        user,
        setUser,
        logOut,
        updateUser,
        loading,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;