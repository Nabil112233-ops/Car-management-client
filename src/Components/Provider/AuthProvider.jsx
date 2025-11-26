import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import { app } from '../Firebase/firebase.config';



export const AuthContext = createContext()
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
    }

    const signInWithEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () => {
        return signInWithPopup(auth, provider);
    }
    const signOut = () => {
        return auth.signOut();
    }

    const authinfo = {
        createUser,
        signInWithEmail,
        googleSignIn,
        signOut,
        
        loading,
        setLoading,
        user,
        setUser
    }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;