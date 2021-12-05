import React, {useEffect} from 'react'
import { AuthConsumer } from '../Context/Auth/AuthProvider';
import { NavLink } from 'react-router-dom';


import btc from '../assets/img/btc.png';
import eth from '../assets/img/eth.png';
import ada from '../assets/img/ada.png'

import '../../src/general.css'
import { retornarValor } from '../helper';
import useCriptoPrice from '../hooks/useCriptoPrice'


const Home = () => {
    
    const {btcState, ethState, adaState, setActualizado,actualizado,  getValues} = useCriptoPrice();

   const { user } = AuthConsumer();

    useEffect(() => {
       setTimeout(() => {
           getValues();
           setActualizado(false);
       }, 5000);
    }, [actualizado])
    return (
        <div className='home_wrapper'>

        <div className='user_side'>
            <img src={eth} alt='eth' className='cripto' / >
           <NavLink className='style_data' to='/profile'>Update data</NavLink> 
        </div>
        

       <table className='user_table'>
           <tr className='user_table_item'>
               <img src={btc} alt='btc' className='cripto' / >
               <td>Cripto</td> 
               <td>  {btcState}</td>
               <button className='btn btn-outline-dark'>Buy</button>
               <button className='btn btn-outline-danger'>Sell</button>
           </tr>
           <tr className='user_table_item'>
              <img src={eth} alt='eth' className='cripto' / >
               <td>Cripto</td>
               <td> {ethState}</td>
               <button className='btn btn-outline-dark'>Buy</button>
               <button className='btn btn-outline-danger'>Sell</button>
           </tr>
           <tr className='user_table_item'>
              <img src={ada} alt='ada' className='cripto' / >
               <td>Cripto</td>
               <td>  {adaState}</td>
               <button className='btn btn-outline-dark'>Buy</button>
               <button className='btn btn-outline-danger'>Sell</button>
           </tr>
       </table>

      </div>
    )
}

export default Home


// ws.onmessage = (e) => {
//     let stockOBJ = JSON.parse(e.data);
//     console.log({e});
//     let price = parseFloat(stockOBJ.p).toFixed(2);
//     stockPriceElement.innerText = price;

//     stockPriceElement.style.color = !lastPrice || lastPrice === price ? 'black' : price > lastPrice ? 'green' : 'red';

//     lastPrice = price
// }