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
        ratesRef.current = json.rates;
        console.log("ratesRef.current", ratesRef.current);
        onChangeToPrice(1);
      })
      .catch((err) => {
        console.warn(err);
        alert("Не вдалось отримати інформацію");
      });
  }, []);

  const onChangeFromPrice = (value) => {
    console.log("value onChangeFromPrice", value);
    console.log(
      "ratesRef.current[fromCurrency] onChangeFromPrice",
      ratesRef.current[fromCurrency]
    );
    const price = value / ratesRef.current[fromCurrency];
    console.log("price onChangeFromPrice", price);
    console.log("fromCurrency onChangeFromPrice", fromCurrency);
    const result = price * ratesRef.current[toCurrency];

    setToPrice(result.toFixed(2));
    setFromPrice(value);
    console.log("result", result);
  };

  const onChangeToPrice = (value) => {
    const result =
      (ratesRef.current[fromCurrency] / ratesRef.current[toCurrency]) * value;
    setFromPrice(result.toFixed(2));
    setToPrice(value);
  };

  useEffect(() => {
    onChangeFromPrice(fromPrice);
  }, [fromCurrency, fromPrice]);

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
