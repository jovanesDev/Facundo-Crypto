import React from 'react'
import { NavLink } from 'react-router-dom'

import avatar from '../assets/img/avatar.png'
import { AuthConsumer } from '../Context/Auth/AuthProvider'

const User = () => {
    const {user} = AuthConsumer();

    console.log(user);
    return (
        
        <div className='user_profile'>
                
                <img src={avatar} alt='eth' className='avatar' / >
                    <h2> User: {user ? (user.displayName ): ('')}</h2>
                    <h4> id: {user ? (user.uid): ('')}</h4>

                <NavLink className='style_data' to='/profile'>Update data</NavLink> 
                
        </div>
       
    )
}

export default User
