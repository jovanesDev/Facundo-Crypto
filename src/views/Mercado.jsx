import React, { useEffect } from "react";
import Spinner from "../components/Spinner/Spinner";
import "../general.css";
import { savedSessionStorage, highLow, precioPorcentaje } from "../helper";
import useCriptoPrice from "../hooks/useCriptoPrice";

const Mercado = () => {
  
  const { btcState, ethState, adaState, getPrice, actualizado } = useCriptoPrice();
  useEffect(() => {

    setTimeout(async() => {
      
      await getPrice();
    }, 8000);
  }, [actualizado]);
  console.log(btcState);

  return (
    <div>
      {!btcState || !ethState || !adaState ? (
        <Spinner />
      )
      :(
      <table className="table table-light text-center">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Value</th>
            <th scope="col">Price Percentage 1h</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Bitcoin</th>

              <>
              <td>€ {btcState && btcState.current_price}</td>
              <td className={highLow(btcState)}>%{btcState && precioPorcentaje(btcState.price_change_percentage_1h_in_currency)}</td>
              </>

          </tr>
          <tr>
            <th scope="row">Ethereum</th>

            <td>€ {ethState && ethState.current_price}</td>
            <td className={highLow(ethState )}>%{ethState && precioPorcentaje(ethState.price_change_percentage_1h_in_currency)}</td>
          </tr>
          <tr>
            <th scope="row">Cardano</th>
            <td>€ {adaState && adaState.current_price}</td>
            <td className={highLow(adaState)}>%{adaState && precioPorcentaje(adaState.price_change_percentage_1h_in_currency)}</td>
          </tr>
        </tbody>
      </table>
      )}
    </div>
      
  );
};

export default Mercado;
