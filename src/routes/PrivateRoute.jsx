import { useEffect} from 'react'
import { useNavigate } from 'react-router'
import { AuthConsumer } from '../Context/Auth/AuthProvider';



const PrivateRoute = ({component}) => {
    const {user} = AuthConsumer();
    
    const navigate = useNavigate();
    useEffect(() => {
       if(!user){

        navigate('/login')
    }
    // eslint-disable-next-line
    }, [user])
    

    return component;
}

export default PrivateRoute
