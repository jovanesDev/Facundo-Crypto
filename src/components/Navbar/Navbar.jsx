import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavBarElements";

import btc from "../../assets/img/btc.png";
import { AuthConsumer } from "../../Context/Auth/AuthProvider";

const Navbar = () => {
  const { user, logout } = AuthConsumer();

  return (
    <>
      <Nav>
        <>
          <NavLink to={user ? "/home" : "/login"}>
            <img src={btc} alt="logo" className="cripto" />
          </NavLink>
          <Bars />
          <NavMenu>
            <NavLink to="/mercado" activeStyle>
              Market
            </NavLink>
            {user ? (
              <>
                <NavLink to="/home" activeStyle>
                  Home
                </NavLink>

                <NavLink to="/movimientos" activeStyle>
                  Movements
                </NavLink>
                <button className="btn btn-outline-light m-5 " onClick={logout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink to="/login" activeStyle>
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
