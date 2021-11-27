import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../../services/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { GlobalConsumer } from "../User/GlobalProvider";

const Auth = createContext();
export const AuthConsumer = () => useContext(Auth);

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const { showSpinner, hideSpinner } = GlobalConsumer();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  const userRegister = async ({ email, password }) => {
    showSpinner();
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      setUser(user);
      hideSpinner();
    } catch (error) {
      console.log(error);
      hideSpinner();
    }
  };

  const loginUser = async ({ email, password }) => {
    showSpinner();
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      setUser(user);
      hideSpinner();
    } catch (error) {
      console.log(error);
      hideSpinner();
    }
  };
  return (
    <Auth.Provider value={{ userRegister, loginUser, user }}>
      {children}
    </Auth.Provider>
  );
};

export default AuthContext;


