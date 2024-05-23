import React from 'react'
import { useState } from 'react';
import styles from './Counter.module.scss'

export function Counter({count, setCount}){

    const onClickMinus = () => 
        {setCount(count -1)
    }
    const onClickPlus = () => {
        setCount(count + 1)
        }
        
    return (
    <div className={styles.container}>
    <div >
    <h2>Counter:</h2>
    <h1>{count}</h1> 
    <button onClick={onClickMinus} className={styles.minus}>- Minus</button>
    <button onClick={onClickPlus} className={styles.plus}>Plus +</button>
 </div></div>
  )
}
