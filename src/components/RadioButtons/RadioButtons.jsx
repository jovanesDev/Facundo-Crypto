import React from "react";

const RadioButtons = ({ setOperation, operation}) => {
  return (
    <div
      className="btn-group"
      role="group"
      aria-label="Basic radio toggle button group"
    >
      <input
        value='buy'
        type="radio"
        className="btn-check"
        name="btnradio"
        id="btnradio1"
        autocomplete="off"
        onChange={(e) => setOperation(e.target.value)}
        checked={operation === 'buy'}
      />
      <label className="btn btn-outline-primary" for="btnradio1">
        Buy
      </label>

      <input
        value='sell'
        type="radio"
        className="btn-check"
        name="btnradio"
        id="btnradio2"
        autocomplete="off"
        onChange={(e) => setOperation(e.target.value)}
        checked={operation === 'sell'}
      />
      <label className="btn btn-outline-primary" for="btnradio2">
        Sell
      </label>
    </div>
  );
};

export default RadioButtons;
