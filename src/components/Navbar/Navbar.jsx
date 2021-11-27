import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElement";

import btc from "../../assets/img/btc.png";

const Navbar = ({ user }) => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={btc} alt="logo" className="cripto" />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/home" activeStyle>
            Home
          </NavLink>
          <NavLink to="/movimientos" activeStyle>
            Movements
          </NavLink>
          <NavLink to="/mercado" activeStyle>
            Market
          </NavLink>
          <NavLink to="/" activeStyle>
            Sign Up
          </NavLink>
          <NavBtn>
            <NavBtnLink to="/registro">Sign In</NavBtnLink>
          </NavBtn>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;

// <div className="topnav">
//   <ul className="menu__nav">
//     {!user && (
//       <li className="menu__item">
//         <img src={btc} alt="simbol" srcset="" className="cripto" />
//         <NavLink to="/" className="nav__item" aria-current="page" href="#">
//           Login
//         </NavLink>
//       </li>
//     )}

//     {user && (
//       <div className="menu__user">
//         <img src={btc} alt="simbol" srcset="" className="cripto" />
//         <li className="menu__item">
//           <NavLink
//             to="/home"
//             className="nav__item"
//             aria-current="page"
//             href="#"
//           >
//             Home
//           </NavLink>
//         </li>
//         <li className="menu__item">
//           <NavLink to="/movimientos" className="nav__item" href="#">
//             Movements
//           </NavLink>
//         </li>
//         <li className="menu__item">
//           <NavLink to="/mercado" className="nav__item" href="#">
//             Market
//           </NavLink>
//         </li>
//       </div>
//     )}
//   </ul>
//   <li className="menu__item">
//     <NavLink to="/" className="nav__btn" href="#">
//       Logout
//     </NavLink>
//   </li>

// </div>
