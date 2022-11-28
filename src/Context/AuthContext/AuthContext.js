import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { app } from '../../Functions/FirebaseConfig';
import { toast } from 'react-toastify';
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
    //update information
    const updateUserInfo = update => {
        setLoading(true);
        return updateProfile(Auth.currentUser, update);
    }
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleLogin = event => {
        setLoading(true);
        event.preventDefault();
        signInWithPopup(Auth, googleProvider)
            .then(result => {
                console.log(result)
                toast('successfully logged in');
            })
    }
    // stay login
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(Auth, currentUser => {
            setLoginUser(currentUser);
            setLoading(false);
            return () => {
                unsubscribe();
            }
        })
    }, [Auth])
    const handleLogOut = (event) => {
        setLoading(true);
        event.preventDefault();
        return signOut(Auth)
    }

    const authData = { emailRegister, emailLogin, updateUserInfo, handleLogOut, loginUser, loading, handleGoogleLogin };
    return (
        <AuthProvider.Provider value={authData}>
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthContext;