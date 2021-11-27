import React, { useEffect} from 'react'
import { Navigate, useNavigate } from 'react-router'
import { AuthConsumer } from '../Context/Auth/AuthProvider';



const PrivateRoute = ({component}) => {
    const {user} = AuthConsumer();
    console.log(user);
    const navigate = useNavigate();
    useEffect(() => {
       if(!user){

        navigate('/login')
    }
    }, [user])
    

    return component;
}

export default PrivateRoute
