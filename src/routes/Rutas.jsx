import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "../components/Layout/Layout";

import Checkout from "../views/Checkout";
import Error from "../views/Error";
import Home from "../views/Home";
import Login from "../views/Login";
import Mercado from "../views/Mercado";
import Movimientos from "../views/Movimientos";
import Registro from "../views/Registro";
import Profile from "../views/Profile";
import PrivateRoute from "./PrivateRoute";
import User from "../views/User";


const Rutas = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route
          path="/"
          element={<PrivateRoute component={<Layout rutas="true" />} />}
        >
          <Route path="checkout/:coin" element={<Checkout />}/>
          <Route path="mercado" element={<Mercado />} />
          <Route path="registro" element={<Registro />} />
          <Route path="login" element={<Login />} />
          <Route path="home" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="movimientos" element={<Movimientos />} />
          <Route path="user" element={<User />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Rutas;
