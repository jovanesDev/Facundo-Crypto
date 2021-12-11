import React from 'react'
import { currentPrice } from '../../helper';

const CurrentPrice = ({price, coin, wallet}) => {

    let text = coin === 'btc' ? 'Current Balance Btc' : coin === 'eth' ? 'Current Balance Eth' : 'Current Balance Ada';
    let balance = coin === 'btc' ? wallet.Btc : coin === 'eth' ? wallet.Etc : wallet.Ada;
    let actualPrice  = currentPrice(coin, price)

    return (
        <>
        <h3>Current Price € {actualPrice} </h3>
        <p>{text} {balance}  </p>
        </>
    )
}

export default CurrentPrice
