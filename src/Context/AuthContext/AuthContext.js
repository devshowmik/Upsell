import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { app } from '../../Functions/FirebaseConfig';
export const AuthProvider = createContext();
const AuthContext = ({ children }) => {
    const Auth = getAuth(app);
    // set user on state
    const [loginUser, setLoginUser] = useState(null);
    // set loading
    const [loading, setLoading] = useState(true);
    //email register 
    const emailRegister = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(Auth, email, password);
    }
    // email login
    const emailLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(Auth, email, password);
    }
    // stay login

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(Auth, currentUser => {
            return () => {
                setLoginUser(currentUser);
                unsubscribe();
                setLoading(false);
            }
        })
    }, [Auth])
    const handleLogOut = (event) => {
        setLoading(true);
        event.preventDefault();
        signOut(Auth)
            .then(() => { })
            .catch(() => { })
    }

    const authData = { emailRegister, emailLogin, handleLogOut, loginUser, loading };
    return (
        <AuthProvider.Provider value={authData}>
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthContext;