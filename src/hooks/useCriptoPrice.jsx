import { useState } from "react";
import axios from "axios";

const useCriptoPrice =  () => {
  const getPrice = async () => {
    setActualizado(true);
    let ethCoin = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&ids=ethereum&order=market_cap_desc&per_page=1&page=1&sparkline=false&price_change_percentage=1h"
    );
    setEthState(ethCoin.data[0]);
    let btcCoin = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&ids=bitcoin&order=market_cap_desc&per_page=1&page=1&sparkline=false&price_change_percentage=1h"
    );
    setBtcState(btcCoin.data[0]);
    let adaCoin = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&ids=cardano&order=market_cap_desc&per_page=1&page=1&sparkline=false&price_change_percentage=1h"
    );
    setAdaState(adaCoin.data[0]);
    setActualizado(false);

  };

  const [btcState, setBtcState] = useState(null);
  const [ethState, setEthState] = useState(null);
  const [adaState, setAdaState] = useState(null);
  const [actualizado, setActualizado] = useState(false);

  return {
    btcState,
    ethState,
    adaState,
    actualizado,
    getPrice,
  };
};

export default useCriptoPrice;
