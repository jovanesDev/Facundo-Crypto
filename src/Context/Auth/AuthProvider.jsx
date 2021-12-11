import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../../services/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  updatePassword,
  updateEmail,
  
} from "firebase/auth";
import {collection, setDoc, addDoc, doc} from 'firebase/firestore'
import { GlobalConsumer } from "../User/GlobalProvider";
import {checkfilledIsEmpty} from '../../helper';

const Auth = createContext();
export const AuthConsumer = () => useContext(Auth);

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const { showSpinner, hideSpinner } = GlobalConsumer();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [user]);

  const userRegister = async ({ name, lastName, email, password }) => {
    
    showSpinner();
    try {
      const registerUser = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(registerUser.user, { displayName: `${name} ${lastName}` });
      setUser(registerUser.user);
      let wall = {
        Ada: 0,
        Btc: 0,
        Etc: 0,
        id: registerUser.user.uid
      }

      await addDoc(collection(db, 'wallets'), wall);
     
      hideSpinner();
    } catch (error) {
      console.log(error);
      hideSpinner();
    }
  };

  const loginUser = async ({ email, password }) => {
    console.log(email, password)
    showSpinner();
    try {
      const userloged =  await signInWithEmailAndPassword(auth, email, password);
      console.log(userloged)
      setUser(userloged);
      hideSpinner();
      // console.log('debe pasar por aca')
    } catch (error) {
      console.log(error);
      hideSpinner();
    }
  };

  const updateUser = async( data ) => {
    const {name,lastName, email, password} = data;
      showSpinner();

      try {
        await updateEmail(user, email);
        await updateProfile(user, { displayName: `${name} ${lastName}`});
        if(!checkfilledIsEmpty(password)){
          await updatePassword(user, password);
          
        }
        
        // setUser();
        hideSpinner()
      } catch (error) {
        hideSpinner();
      }
  }

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Auth.Provider value={{ userRegister, loginUser, logout, updateUser , user }}>
      {children}
    </Auth.Provider>
  );
};

export default AuthContext;
