import React, {  useState } from 'react'


const useCriptoPrice = () => {

    
    let ethCoin  = new WebSocket('wss://stream.binance.com:9443/ws/etheur@trade');
    let btcCoin = new WebSocket('wss://stream.binance.com:9443/ws/btceur@trade');
    let adaCoin = new WebSocket('wss://stream.binance.com:9443/ws/adaeur@trade');
    const [btcState, setBtcState] = useState(null);
    const [ethState, setEthState] = useState(null);
    const [adaState, setAdaState] = useState(null);
    

   
        
            ethCoin.onmessage = (e) => {
                let stockOBJ = JSON.parse(e.data);
                console.log({e});
                let price = parseFloat(stockOBJ.p).toFixed(2);
                setEthState(price)
                
                
    
            }
            btcCoin.onmessage = (e) => {
                let stockOBJ1 = JSON.parse(e.data);
                let price = parseFloat(stockOBJ1.p).toFixed(2);
                setBtcState(price)
                
                
            }

            adaCoin.onmessage = (e) => {
                let stockOBJ2 = JSON.parse(e.data);
                let price = parseFloat(stockOBJ2.p).toFixed(2);
                setAdaState(price)
                
                
            }

      
       


     



    
    

    return{
        btcState,
        ethState,
        adaState,
       
        

    }
}

export default useCriptoPrice
