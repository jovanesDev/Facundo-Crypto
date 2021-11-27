import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Error from "../views/Error";
import Home from "../views/Home";
import Login from "../views/Login";
import Mercado from "../views/Mercado";
import Movimientos from "../views/Movimientos";
import Registro from "../views/Registro";
import PrivateRoute from "./PrivateRoute";

const Rutas = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="registro" element={<Registro />} />
        <Route path="login" element={<Login />} />
        <Route path="mercado" element={<Mercado />} />
        <Route path="/" element={<PrivateRoute component={<Layout rutas="true"/>}  />}>
          <Route path="home" element={<Home />} />
          <Route path="movimientos" element={<Movimientos />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Rutas;
