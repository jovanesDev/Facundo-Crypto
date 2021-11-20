import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Error from "../views/Error";
import Home from "../views/Home";
import Login from "../views/Login";
import Mercado from "../views/Mercado";
import Movimientos from "../views/Movimientos";

const Rutas = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/login" index element={<Login />} />
          <Route path="/" index element={<Home />} />
          <Route path="/movimientos" index element={<Movimientos />} />
          <Route path="/mercado" index element={<Mercado />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default Rutas;
