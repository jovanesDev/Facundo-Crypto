import React from "react";

import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Spinner from "../Spinner/Spinner";

const Layout = ({ rutas, children }) => {
  let user = localStorage.getItem("user");
  

  return (
    <div>
      {/* <Spinner/> */}
      <Navbar user={user} />
      {rutas && <Outlet />}
      {!rutas && children}
      <Footer />
    </div>
  );
};

export default Layout;
