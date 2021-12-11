import React from "react";
import MovimientosItem from "../components/MovimientosItems/MovimientosItem";

import { UserConsumer } from "../Context/User/UserProvider";

const Movimientos = () => {
  const { movimientos } = UserConsumer();
  
  return (
    <div>
      <h5 className="text-center">Recent Transfers </h5>
      <table className="table table-light text-center">
        <thead>
          <tr>
            <th scope="col" className="text-center">
              Id
            </th>
            <th scope="col" className="text-center">
              Date
            </th>
            <th scope="col" className="text-center">
              Transaction Type
            </th>
            <th scope="col" className="text-center">
              Asset type
            </th>
          </tr>
        </thead>
        <tbody>
          {movimientos.length > 0 && movimientos &&
            movimientos.map((e) => (
              <MovimientosItem key={e.id} movimiento={e} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Movimientos;
