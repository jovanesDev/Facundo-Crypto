import React, { useContext, createContext, useState } from 'react'
import { GlobalConsumer } from './GlobalProvider';

const UserContext = createContext();// Creamos el contexto
export const UserConsumer = () => useContext(UserContext); // Creamos el consumidor

const UserProvider = ({children}) => {
    const [user, setUser] = useState(false); // lo que proveemos

    const {showSpinner, hideSpinner} = GlobalConsumer(); // me traigo el global consumer para consumir lo que provee el global provider

    return (
        <UserContext.Provider value={{ user }}> 
            { children }
        </UserContext.Provider>
    )
}

// User context provider en el value paso lo que quiero compartir con mis consumidores

export default UserProvider
