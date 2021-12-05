import React, { useEffect } from "react";
import "../general.css";
import { savedSessionStorage, highLow } from "../helper";
import useCriptoPrice from "../hooks/useCriptoPrice";

const Mercado = () => {
  const {
    btcState,
    ethState,
    adaState,
   
 
  } = useCriptoPrice();
 


  let config = [
    {
      key: "btc",
      value: btcState,
    },
    { key: "eth", value: ethState },
    { key: "ada", value: adaState },
  ];
 
  return (
    <div>
      <table className="table table-light text-center">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Value</th>
            <th scope="col">Balance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Bitcoin</th>
            <td>€ {btcState}</td>
            <td>%11</td>
          </tr>
          <tr>
            <th scope="row">Ethereum</th>

            <td>€ {ethState}</td>
            <td>%11</td>
          </tr>
          <tr>
            <th scope="row">Cardano</th>
            <td>€ {adaState}</td>
            <td>%11</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Mercado;
