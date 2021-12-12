import React, { useState } from 'react'
import {currentBalance, currentPrice, suma} from '../helper/index';
import { UserConsumer } from '../Context/User/UserProvider';
import { AuthConsumer } from '../Context/Auth/AuthProvider';



const SellForm = ({wallet, price , coin}) => {

  const {user} = AuthConsumer();
  const {ventaCriptoMoneda} = UserConsumer()

  let actualbalance = currentBalance(coin, wallet);
  const [sell, setSell] = useState(1);
  
  let actualPrice = currentPrice(coin, price);
  
  let total = suma(( sell || actualbalance), actualPrice);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ventaCripto = {
      cantidad: Number(sell),
      operacion:'venta',
      usuario: user.uid,
      date: Date.now(),
      cripto: coin
    }
    new Promise( (resolve, reject)=> {
      setTimeout(() => {
        resolve (ventaCriptoMoneda(ventaCripto));
      }, 3000);
    })
    setSell(actualbalance - sell)
  }


    return (
        <form onSubmit={handleSubmit}>
        <div className="container w-100 my-5 ">
          <div className="row w-75 mx-auto h-100">
            <div className=" col-12  h-100">

              <h2>Total</h2>
              { sell >= 0 && <p>{sell || actualbalance} X {actualPrice} = €{total}</p>}
              
              <input type="number" className=" m-lg-3 h-100" value={sell} onChange={(e) => setSell(e.target.value)}/>
              
              <button
                disabled = {actualbalance <= 0 || sell <=0 || sell > actualbalance}
                
                className="btn btn-success btn-sm rounded fs-5 w-100"
              >
                Sell
              </button>
              {actualbalance <= 0 && <p className='text-danger'>Balance insuficiente para la operación</p>}
              {sell <=0 && <p className='text-danger'>Cantidad de venta tiene que ser mayor a 0</p>}
              {sell > actualbalance && <p className='text-danger'>Saldo insuficiente</p>}
            </div>
          </div>
        </div>
      </form>
    )
}

export default SellForm



