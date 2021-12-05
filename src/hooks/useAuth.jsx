import React, { useState } from 'react'
import { auth } from '../services/firebase';
import {createUserWithEmailAndPassword } from 'firebase/auth';
import { GlobalConsumer } from '../Context/User/GlobalProvider';

const useAuth = () => {

    const {showSpinner, hideSpinner} = GlobalConsumer();

    const [user, setUser ] = useState(null);

    const userRegister = async({email, password}) =>{
        showSpinner();
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password);
            setUser(user);
            hideSpinner();
        } catch (error) {
            console.log(error)
            hideSpinner();
        }
    }

    return {
        userRegister,
        user
    }
}

export default useAuth
