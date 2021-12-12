import React from "react";

import Moment from 'react-moment';

const MovimientosItem = ({ movimiento }) => {

  let date = movimiento && !movimiento.date  ? Date.now() : movimiento.date;
  return (
    <>
      <tr>
        <td> {movimiento && movimiento.id}</td>
        <td> {movimiento && <Moment format='YYYY-MM-DD' date={date}>{date}</Moment>}</td>
        <td> {movimiento && movimiento.operacion.toUpperCase()}</td>
        <td> {movimiento && movimiento.cantidad}</td>
        <td> {movimiento && movimiento.cripto.toUpperCase()}</td>
      </tr>
    </>
  );
};

export default MovimientosItem;
