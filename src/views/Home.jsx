import React from 'react'



const Home = () => {
    let btc = new WebSocket('wss://stream.binance.com:9443/ws/etheur@trade');
    btc.onmessage = (e) =>{
        let stockOBJ = JSON.parse(e.data);
        console.log(parseFloat(stockOBJ.p).toFixed(2))
    }
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems:'center',
            height: '90vh'
        }}>
                <h1>Soy Home</h1>
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