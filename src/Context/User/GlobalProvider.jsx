import React, { createContext, useContext, useState } from 'react';
import Spinner from '../../components/Spinner/Spinner';

const GlobalContext = createContext();
export const GlobalConsumer = () => useContext(GlobalContext)

const GlobalProvider = ({children}) => {

    const [spinner, setSpinner] = useState(false);

    const showSpinner = () => { setSpinner(true)};
    const hideSpinner = () => { setSpinner(false)};

    return (
        <GlobalContext.Provider value={{showSpinner, hideSpinner}}>
            {spinner && <Spinner />}
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider

