import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { auth } from "../Firebase/Firebase.init";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();
  // create User Start here
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // create User end here

  // Sign In With Email and password Start here
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // Sign In With Email and password end here

  // SignIn Out start here
  const signOutUser = () => {
    return signOut(auth);
  };
  // SignIn Out end here

  // Google Login Start here
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // Google Login end here

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      const userInfo = {
        email: currentUser?.email,
        name: createUser?.name,
        role: "customer",
      };
      console.log(createUser);
      try {
       await axios.post(
          `${import.meta.env.VITE_API}/user/${currentUser?.email}`,
          userInfo
        );
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    });
    return () => {
      return unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    signIn,
    googleLogin,
    signOutUser,
    createUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
