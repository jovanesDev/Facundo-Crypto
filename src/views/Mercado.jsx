import React from "react";
import btc from '../assets/img/btc.png'
import eth from '../assets/img/eth.png'
import ada from '../assets/img/ada.png'
import '../general.css'


const Mercado = () => {

  return (
    <div className="marketWrapper">
      <table className='table table-light'>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Symbol</th>
            <th scope="col">Value</th>
            <th scope="col">Balance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Bitcoin</th>
            <th scope="row"><img src={btc} alt='Bitcoin'  className="cripto"/></th>
            <td>U$D 60000</td>
            <td>%1200000</td>
          </tr>
          <tr>
            <th scope="row">Ethereum</th>
            <th scope="row"><img src={eth} alt='Ethereum'  className="cripto"/></th>
            <td>U$D 60000</td>
            <td>%1200000</td>
          </tr>
          <tr>
            <th scope="row">Cardano</th>
            <th scope="row"><img src={ada} alt='Cardano'  className="cripto"/></th>
            <td>U$D 3</td>
            <td>%1200000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Mercado;
