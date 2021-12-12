import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavBarElements";

import 'bootswatch/dist/lux/bootstrap.min.css'
import btc from "../../assets/img/btc.png";
import { AuthConsumer } from "../../Context/Auth/AuthProvider";

const Navbar = () => {
  const { user, logout } = AuthConsumer();

  return (
    <>
      <Nav className='class="navbar navbar-expand-lg navbar-dark bg-dark"'>
        <>
          <NavLink to={user ? "/home" : "/login"}>
            <img src={btc} alt="logo" className="cripto" />
          </NavLink>
          <Bars />
          <NavMenu>
            <NavLink to="/mercado">
              Market
            </NavLink>
            {user ? (
              <>
                <NavLink to="/home">
                  Home
                </NavLink>

                <NavLink to="/movimientos">
                  Movements
                </NavLink>
                <NavLink to="/user">
                  User
                </NavLink>
                <button className="btn_logout" onClick={logout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink to="/login">
                  Sign Up
                </NavLink>
                <NavBtn>
                  <NavBtnLink to="/registro">Sign In</NavBtnLink>
                </NavBtn>
              </>
            )}
          </NavMenu>
        </>
      </Nav>
    </>
  );
};

export default Navbar;


