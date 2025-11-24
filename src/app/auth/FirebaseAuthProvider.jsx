"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase.config";

const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();

export function FirebaseAuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Monitor auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false); // 🔹 loading complete after checking auth
    });
    return () => unsubscribe();
  }, []);

  const googleLogin = async () => {
    const result = await signInWithPopup(auth, googleProvider);
    setUser(result.user);
    return result;
  };

  const register = async (email, password) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    setUser(userCredential.user);
    return userCredential;
  };

  const login = async (email, password) => {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    setUser(userCredential.user);
    return userCredential;
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
  };

  const updateUserProfile = async ({ displayName, photoURL }) => {
    if (!auth.currentUser) throw new Error("No user is logged in");
    await updateProfile(auth.currentUser, { displayName, photoURL });
    setUser({
      ...auth.currentUser,
      displayName: displayName || auth.currentUser.displayName,
      photoURL: photoURL || auth.currentUser.photoURL,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        setLoading, // 🔹 include loading state
        googleLogin,
        register,
        login,
        logout,
        updateUserProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
