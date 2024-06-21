import React from "react";
import { useState } from "react";
import styles from "./Counter.module.scss";

export function Counter() {
  const [count, setCount] = useState(0);

  const onClickMinus = () => {
    setCount(count - 1);
  };
  const onClickPlus = () => {
    setCount(count + 1);
  };

  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.subtitle}>Counter:</h2>
        <h1 className={styles.title}>{count}</h1>
        <button onClick={onClickMinus} className={styles.minus}>
          - Minus
        </button>
        <button onClick={onClickPlus} className={styles.plus}>
          Plus +
        </button>
      </div>
    </div>
  );
}
