import React, { useEffect} from 'react'
import { useNavigate } from 'react-router'
import { AuthConsumer } from '../Context/Auth/AuthProvider';



const PrivateRoute = ({component}) => {
    const {user} = AuthConsumer();
    
    const navigate = useNavigate();
    useEffect(() => {
       if(!user){

        navigate('/login')
    }
    }, [user])
    

    return component;
}

export default PrivateRoute
