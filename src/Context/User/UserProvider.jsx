import React, { useContext, createContext, useState, useEffect } from "react";
import { db } from "../../services/firebase";
import { doc, getDocs, query, collection, where } from "firebase/firestore";

import { AuthConsumer } from "../Auth/AuthProvider";

const UserContext = createContext(); // Creamos el contexto, luego va a ser el proveedor
export const UserConsumer = () => useContext(UserContext); // Creamos el consumidor

const UserProvider = ({ children }) => {
  const { user } = AuthConsumer();
  const [wallet, setWallet] = useState(null); // lo que proveemos
//   console.log(user);

  const getWallet = async () => {
    const q = query(collection(db, "wallets"), where("id", "==", user.uid));
    const result = await getDocs(q);
    result.forEach((doc) => {
      setWallet(doc.data());
    });
  };
  useEffect(() => {
    if (user) {
      getWallet();
    }
    return () => {
      setWallet(null);
    };
  }, [!user]);

  // const {showSpinner, hideSpinner} = GlobalConsumer(); // me traigo el global consumer para consumir lo que provee el global provider

  return (
    <UserContext.Provider value={{ wallet }}>{children}</UserContext.Provider>
  );
};

// User context provider en el value paso lo que quiero compartir con mis consumidores

export default UserProvider;
