import React, { useEffect } from "react";
import '../general.css'
import useCriptoPrice from "../hooks/useCriptoPrice";


const Mercado = () => {


  const {btcState, ethState, adaState, setActualizado,actualizado,  getValues} = useCriptoPrice();

  useEffect(() => {
    setTimeout(() => {
        getValues();
        setActualizado(false);
    }, 5000);
 }, [actualizado])
  return (
    <div>
      <table className='table table-light text-center'>
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
            <td>{btcState}</td>
            <td>%1200000</td>
          </tr>
          <tr>
            <th scope="row">Ethereum</th>
         
            <td>{ethState}</td>
            <td>%1200000</td>
          </tr>
          <tr>
          <th scope="row">Cardano</th>
            <td>{adaState}</td>
            <td>%1200000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Mercado;
