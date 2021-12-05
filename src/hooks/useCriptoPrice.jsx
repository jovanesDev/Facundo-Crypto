import React, {  useState } from 'react'
import axios from 'axios'

const useCriptoPrice = () => {

    const getValues = async() => {
        let btcValue = await axios.get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=EUR') ;
        setBtcState(btcValue.data.DISPLAY['BTC']['EUR']['PRICE']);
        let ethValue = await axios.get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=EUR');
        setEthState(ethValue.data.DISPLAY['ETH']['EUR']['PRICE']);
        let adaValue = await axios.get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ADA&tsyms=EUR');
        setAdaState(adaValue.data.DISPLAY['ADA']['EUR']['PRICE']);

        setActualizado(true);
    }

    const [btcState, setBtcState] = useState('--');
    const [ethState, setEthState] = useState('--');
    const [adaState, setAdaState] = useState('--');
    const [actualizado, setActualizado] = useState(false);
   
    
  
    return{
        btcState,
        ethState,
        adaState,
        setActualizado,
        actualizado,
        getValues
    }
}

export default useCriptoPrice
