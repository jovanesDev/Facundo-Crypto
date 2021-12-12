import React, { useContext, createContext, useState, useEffect } from "react";
import { db } from "../../services/firebase";
import { doc, getDocs,addDoc, query, collection, where, updateDoc} from "firebase/firestore";

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
      doc={wid:doc.id,...doc.data()}
      setWallet(doc);
    });
  };
  
const comprarCriptoMoneda = async (data) =>{
  const { cripto, cantidad } = data;
  const walletRef = doc(db,'wallets',wallet.wid);
  console.log(data)
  let nuevoPrecio;
  if(cripto === 'eth'){
    nuevoPrecio = cantidad + wallet.Etc;
    setWallet({...wallet,'Etc':nuevoPrecio})
    await updateDoc(walletRef,{
      ...wallet,
      'Etc':nuevoPrecio
    })
    await addDoc(collection(db,'movimientos'),data)
  }else if( cripto === 'btc'){
    nuevoPrecio = cantidad + wallet.Btc
    setWallet({...wallet ,'Btc':nuevoPrecio})
    await updateDoc(walletRef,{
      ...wallet,
      'Btc':nuevoPrecio
    })
    await addDoc(collection(db,'movimientos'),data)
  }else{
    nuevoPrecio = cantidad + wallet.Ada
    setWallet({...wallet,'Ada':nuevoPrecio})
    await updateDoc(walletRef,{
      ...wallet,
      'Ada':nuevoPrecio
    })
    await addDoc(collection(db,'movimientos'),data)
  }
}

const ventaCriptoMoneda = async (data) =>{
  const { cripto, cantidad } = data;
  const walletRef = doc(db,'wallets',wallet.wid);
  console.log(data)
  let nuevoPrecio;
  if(cripto === 'eth'){
    nuevoPrecio = wallet.Etc - cantidad;
    setWallet({...wallet,'Etc':nuevoPrecio})
    await updateDoc(walletRef,{
      ...wallet,
      'Etc':nuevoPrecio
    })
    await addDoc(collection(db,'movimientos'),data)
  }else if( cripto === 'btc'){
    nuevoPrecio = wallet.Btc - cantidad;
    setWallet({...wallet ,'Btc':nuevoPrecio})
    await updateDoc(walletRef,{
      ...wallet,
      'Btc':nuevoPrecio
    })
    await addDoc(collection(db,'movimientos'),data)
  }else{
    nuevoPrecio = wallet.Ada - cantidad
    setWallet({...wallet,'Ada':nuevoPrecio})
    await updateDoc(walletRef,{
      ...wallet,
      'Ada':nuevoPrecio
    })
    await addDoc(collection(db,'movimientos'),data)
  }
}

  // const {showSpinner, hideSpinner} = GlobalConsumer(); // me traigo el global consumer para consumir lo que provee el global provider
  const getMovimientos = async() =>{
    const m = query(collection(db, "movimientos"), where("usuario", "==", user.uid));
    const result = await getDocs(m);
    let arr = [];
     result.forEach((doc) => {
      doc = {id: doc.id, ...doc.data()}
      arr.push(doc)
      arr.sort(function (a, b) {
        if (a.date > b.date) {
          return 1;
        }
        if (a.date < b.date) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });

      arr.reverse()
     // setMovimientos([...movimientos, doc]);
    });
    setMovimientos(arr)
  }
  useEffect(() => {
    if (user) {
      getWallet();
    }
    return () => {
      setWallet(null);
      setMovimientos([]);
    };
    // eslint-disable-next-line
  }, [!user]);

  return (
    <UserContext.Provider value={{ wallet , movimientos, comprarCriptoMoneda,getMovimientos,ventaCriptoMoneda }} >{children}</UserContext.Provider>
  );
};

// User context provider en el value paso lo que quiero compartir con mis consumidores

export default UserProvider;
