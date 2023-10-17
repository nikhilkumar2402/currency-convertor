"use client";
import React, { useEffect, useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

const page = () => {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    // setConvertedAmount(amount);
    // setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };
  useEffect(()=>{
    convert()
  },[options])

  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url('https://img.freepik.com/free-vector/gradient-cryptocurrency-concept_23-2149215736.jpg?w=1380&t=st=1697101893~exp=1697102493~hmac=924b1f47c0a49bc1b9cb7b96a64a2381fa359b4cf75f320ede664531cd9ffa71')`}}>
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">

          {/* <form onSubmit={(e) => { 
            e.preventDefault(); 
            convert();
          }} > */}
            <div className="w-full mb-1">
              <InputBox label="From" 
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button type="button" className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5" onClick={swap}>swap</button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox label="To" 
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>

            {/* <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg" >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button> */}

          {/* </form> */}
        </div>
      </div>
    </div>
  );
};

export default page;
