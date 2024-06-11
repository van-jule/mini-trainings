import "./styles.scss";
import { Block } from "./Block";
import React, { useState, useEffect, useRef } from "react";

export const CurrencyConvertor = () => {
  const [fromCurrency, setFromCurrency] = useState("UAH");
  const [toCurrency, setToCurrency] = useState("USD");
  const [fromPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(1);

  const [rates, setRates] = useState({});
  const ratesRef = useRef({});

  useEffect(() => {
    fetch(
      "https://api.currencyfreaks.com/v2.0/rates/latest?apikey=e829d97dbf9d42fb8d969aaa5d00de65"
    )
      .then((res) => res.json())
      .then((json) => {
        setRates(json.rates);
        console.log(rates, "rates");
        // onChangeToPrice(1);
      })
      .catch((err) => {
        console.warn(err);
        alert("Не вдалось отримати інформацію");
      });
  }, []);

  const onChangeFromPrice = (value) => {
    const price = value / rates[fromCurrency];
    console.log("fromCurrency", fromCurrency);
    console.log("rates[fromCurrency]", rates[fromCurrency]);
    const result = price * rates[toCurrency];

    setToPrice(result);
    setFromPrice(value);
    console.log("result", result);
  };

  const onChangeToPrice = (value) => {
    const result = (rates[fromCurrency] / rates[toCurrency]) * value;
    setFromPrice(result);
    setToPrice(value);
    console.log(value);
  };

  useEffect(() => {
    onChangeFromPrice(fromPrice);
  }, [fromCurrency]);

  useEffect(() => {
    onChangeToPrice(toPrice);
  }, [toCurrency]);

  return (
    <div className="container">
      <Block
        value={fromPrice}
        currency={fromCurrency}
        onChangeCurrency={setFromCurrency}
        onChangeValue={onChangeFromPrice}
      />
      <Block
        value={toPrice}
        currency={toCurrency}
        onChangeCurrency={setToCurrency}
        onChangeValue={onChangeToPrice}
      />
    </div>
  );
};
