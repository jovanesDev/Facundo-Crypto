import React from 'react'
import { useLocation } from 'react-router'
import Navbar from '../Navbar/Navbar'
import Spinner from '../Spinner/Spinner';

const Layout = ({ children }) => {

    const {pathname} = useLocation();


    return (
        <div>
            {/* {(pathname === '/' || pathname === '/mercado' || pathname === '/movimientos' || pathname === '/login') && <Spinner />} */}
            {(pathname === '/' || pathname === '/mercado' || pathname === '/movimientos' || pathname === '/login') && <Navbar/> }
            { children }
        </div>
    )
}

export default Layout
