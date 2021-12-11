import React, { useEffect, useState } from 'react'
import axios from "axios";
import useCriptoPrice from '../hooks/useCriptoPrice';
import CurrencyRow from '../views/CurrencyRow';
import {currentBalance, currentPrice, suma} from '../helper/index';



const SellForm = ({wallet, price , coin}) => {
  let actualbalance = currentBalance(coin, wallet);
  const [sell, setSell] = useState(actualbalance);
  
  let actualPrice = currentPrice(coin, price);
  
  let total = suma(sell, actualPrice);
    return (
        <form onSubmit={''}>
        <div className="container w-100 my-5 ">
          <div className="row w-75 mx-auto h-100">
            <div className=" col-12  h-100">

              <h2>Total</h2>
              <p>{sell} X {actualPrice} = €{total}</p>
              
              <input type="number" className=" m-lg-3 h-100" value={sell} onChange={(e) => setSell(e.target.value)}/>
              
              <button
                disabled = {actualbalance <= 0}
                
                className="btn btn-success btn-sm rounded fs-5 w-100"
              >
                Sell
              </button>
              {actualbalance <= 0  && <p className='text-danger'>Balance insuficiente para la operación</p>}
            </div>
          </div>
        </div>
      </form>
    )
}

export default SellForm



