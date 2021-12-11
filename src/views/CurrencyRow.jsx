import React from 'react'

const CurrencyRow = () => {
    return (
        <>
           <input type="number" /> 
           <select>
               <option value="Euro">Euro</option>
               <option value="Btc">Bitcoin</option>
               <option value="Eth">Ethereum</option>
               <option value="Ada">Cardano</option>
           </select>
        </>
    )
}

export default CurrencyRow
