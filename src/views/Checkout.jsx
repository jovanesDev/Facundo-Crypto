import React, { useEffect, useState } from "react";

import useCriptoPrice from "../hooks/useCriptoPrice";
import "bootswatch/dist/lux/bootstrap.min.css";

import eth from "../assets/img/eth.png";
import btc from "../assets/img/btc.png";
import ada from "../assets/img/ada.png";

import { useParams } from "react-router-dom";
import SmallSpinner from "../components/Spinner/SmallSpinner";
import RadioButtons from "../components/RadioButtons/RadioButtons";
import BuyForm from "../BuyForm/BuyForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SellForm from "../SellForm/SellForm";
import { UserConsumer } from "../Context/User/UserProvider";
import CurrentPrice from "../components/CurrentPrice/CurrentPrice";
const stripePromise = loadStripe(
  "pk_test_51K2Z59ArPJRegfF6VepHYHK18YVLfMTwu2NvBEILh2gVkOlu0HohhQlzCZcsW1frWeCE2AK7GYv5JAT8Htfjtq3r00GbvaXmnR"
);

const CheckoutForm = () => {
  const [operation, setOperation] = useState("buy");
  const { coin } = useParams();
  const { wallet } = UserConsumer();

  const {
    btcState,
    ethState,
    adaState,
    getPrice,
    actualizado,
  } = useCriptoPrice();

  useEffect(() => {
    setTimeout(async () => {
      await getPrice();
    }, 8000);
  // eslint-disable-next-line
  }, [actualizado]);

  return (
    <div className="card card-body w-50 mx-auto my-5">
      {/* Product Information */}
      {!btcState || !ethState || !adaState || !wallet ? (
        <SmallSpinner />
      ) : (
        <>
          <div className="row">
            <div className="col-6">
              <img
                src={coin === "eth" ? eth : coin === "btc" ? btc : ada}
                alt="Ethereum"
                className="cripto"
              />
            </div>
            <div className="col-6">
              
              <CurrentPrice coin={coin} price={[ {key : 'ada', value: adaState},  {key: 'eth', value: ethState}, {key: 'btc', value:btcState}]} wallet={wallet} />
            </div>
          </div>
          {operation === "buy" &&  (
            <Elements stripe={stripePromise}>
              <BuyForm wallet={ [{key:'eth', value:wallet.Etc}, {key:'btc', value:wallet.Btc}, {key:'ada', value:wallet.Ada}]}
              coin={coin}
              price={[ {key : 'ada', value: adaState},  {key: 'eth', value: ethState}, {key: 'btc', value:btcState}]}/>
            </Elements>
          ) 
          }
          {operation === "sell" && (
            <SellForm
              wallet={ [{key:'eth', value:wallet.Etc}, {key:'btc', value:wallet.Btc}, {key:'ada', value:wallet.Ada}]}
              coin={coin}
              price={[ {key : 'ada', value: adaState},  {key: 'eth', value: ethState}, {key: 'btc', value:btcState}]}
            />
          )
          }

          <RadioButtons setOperation={setOperation} operation={operation} />
        </>
      )}
    </div>
  );
};

export default CheckoutForm;
