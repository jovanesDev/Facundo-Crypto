import React, { useState } from "react";
import { CardElement } from "@stripe/react-stripe-js";
import { currentPrice } from "../helper/index";
import { suma } from "../helper";
import { AuthConsumer } from "../Context/Auth/AuthProvider";
import { UserConsumer } from "../Context/User/UserProvider";

const BuyForm = ({ price, coin }) => {
  const [buy, setBuy] = useState(1);
  const [cartValid, setCartValid] = useState(false);

  const { user } = AuthConsumer();

  const { comprarCriptoMoneda } = UserConsumer();

  let actualPrice = currentPrice(coin, price);

  let total = suma(buy, actualPrice);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const compraCripto = {
      cantidad: Number(buy),
      operacion: "compra",
      usuario: user.uid,
      date: Date.now(),
      cripto: coin,
    };
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(comprarCriptoMoneda(compraCripto));
      }, 3000);
    });
  };
  return (
    <div>
      <div className="container w-100 my-5 ">
        <div className="row w-75 mx-auto h-100">
          <div className=" col-12  h-100">
            <h2>Total</h2>
            <p>
              {buy} X {actualPrice} = €{total}
            </p>
            <input
              type="number"
              value={buy}
              className="h-75"
              onChange={(e) => setBuy(e.target.value)}
            />

            <div className="form-group border border-1 border-dark my-4 py-2 rounded">
              <CardElement onChange={(e) => setCartValid(e.complete)} />
            </div>
            <button
              disabled={buy <= 0 || !cartValid}
              className="btn btn-success btn-sm rounded fs-5 w-100"
              onClick={handleSubmit}
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyForm;
