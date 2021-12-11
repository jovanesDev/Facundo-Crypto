import React, { useContext, createContext, useState, useEffect } from "react";
import { db } from "../../services/firebase";
import { doc, getDocs, query, collection, where } from "firebase/firestore";

import { AuthConsumer } from "../Auth/AuthProvider";

const UserContext = createContext(); // Creamos el contexto, luego va a ser el proveedor
export const UserConsumer = () => useContext(UserContext); // Creamos el consumidor

const UserProvider = ({ children }) => {
  const { user } = AuthConsumer();
  const [wallet, setWallet] = useState(null); // lo que proveemos
  const [movimientos, setMovimientos ] = useState([]);

  const getWallet = async () => {
    const q = query(collection(db, "wallets"), where("id", "==", user.uid));
    const result = await getDocs(q);
    result.forEach((doc) => {
      setWallet(doc.data());
    });
  };
  
const comprarCriptoMoneda = (data) =>{
  const { id,operacion,date, cripto, cantidad } = data;
  
  // let nuevoPrecio = (cripto === 'eth') ? (parseInt(cantidad) + parseInt(wallet.Eth) ) : cripto === 'btc' ? (parseInt(cantidad) + Number(wallet.Btc)) : (cantidad + Number(wallet.Ada))
  // console.log(nuevoPrecio);
  let nuevoPrecio;
  if(cripto === 'eth'){
    nuevoPrecio = cantidad + wallet.Etc;
  }else if( cripto === 'btc'){
    nuevoPrecio = cantidad + wallet.Btc
  }else{
    nuevoPrecio = cantidad + wallet.Ada
  }
  console.log(nuevoPrecio);

}

  // const {showSpinner, hideSpinner} = GlobalConsumer(); // me traigo el global consumer para consumir lo que provee el global provider
  const getMovimientos = async() =>{
    const m = query(collection(db, "movimientos"), where("usuario", "==", user.uid));
    const result = await getDocs(m);
    result.forEach((doc) => {
      doc = {id: doc.id, ...doc.data()}
      setMovimientos([...movimientos, doc]);
    });
  }
  useEffect(() => {
    if (user) {
      getWallet();
      getMovimientos();
    }
    return () => {
      setWallet(null);
      setMovimientos([]);
    };
  }, [!user]);
  return (
    <UserContext.Provider value={{ wallet , movimientos, comprarCriptoMoneda }} >{children}</UserContext.Provider>
  );
};

// User context provider en el value paso lo que quiero compartir con mis consumidores

export default UserProvider;
