import React from 'react'
import { NavBtnLink } from '../components/Navbar/NavBarElements'


import '../../src/general.css'
const Error = () => {
    return (
        <>
        <div style={{
            display: 'flex',
            flexDirection:'column',
            justifyContent: 'center',
            alignItems:'center',
            height: '90vh',
           

        }}>
            <h1>Error</h1>
            <NavBtnLink to='/home'>Volver al Home</NavBtnLink> 
        </div>

            </>
    )
}

export default Error
