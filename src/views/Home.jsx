import React, {useEffect} from 'react'
import { AuthConsumer } from '../Context/Auth/AuthProvider';
import { NavLink } from 'react-router-dom';


import btc from '../assets/img/btc.png';
import eth from '../assets/img/eth.png';
import ada from '../assets/img/ada.png';

import '../../src/general.css'
import { retornarValor } from '../helper';
import useCriptoPrice from '../hooks/useCriptoPrice'
import { UserConsumer } from '../Context/User/UserProvider';


const Home = () => {
    
    const {btcState, ethState, adaState, getPrice, actualizado} = useCriptoPrice();
    const {wallet} = UserConsumer();
    

   const { user } = AuthConsumer();
    useEffect(() => {

        setTimeout(async() => {
            await getPrice()
        }, 8000);
       
    }, [actualizado]);

    return (
        <div className='home_wrapper'>

        <div className="wallet_Container">
                <h2>Hola, {user && user.displayName}</h2>
                <span>Wallet { wallet && wallet.id}</span>  <br/>
                <span>Bitcoin: {wallet && wallet.Btc}</span> <br/>
                <span>Ethereum: {wallet && wallet.Etc}</span> <br/>
                <span>Cardano: {wallet && wallet.Ada}</span>
                <hr/>
        </div>
        

       <table className='user_table'>
           <tr className='user_table_item'>
               <img src={btc} alt='btc' className='cripto' / >
               
               <td>€ {btcState && btcState.current_price}</td>
               <NavLink className='style_data' to='/checkout/btc'>Go to Bitcoin</NavLink>
               
           </tr>
           <tr className='user_table_item'>
              <img src={eth} alt='eth' className='cripto' / >
              
               <td> € {ethState && ethState.current_price}</td>
               <NavLink className='style_data' to='/checkout/eth'>Go to Ethereum</NavLink>
               
           </tr>
           <tr className='user_table_item'>
              <img src={ada} alt='ada' className='cripto' / >
               
               <td> € {adaState && adaState.current_price}</td>
               <NavLink className='style_data' to='/checkout/ada'>Go to Cardano</NavLink>
               
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