import React, { useState } from "react";

import { Outlet } from "react-router-dom";
import { AuthConsumer } from "../../Context/Auth/AuthProvider";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";



const Layout = ({ rutas, children }) => {
  const {user} = AuthConsumer();
  


  return (
    <div>

      <Navbar user={user}/>
      {rutas && <Outlet />}
      {!rutas && children}
      <Footer />
    </div>
  );
};

export default Layout;
