import React from 'react'
import { useState } from 'react';

export function Counter(){
    const [count, setCount] = useState(0);

    const onClickMinus = () => 
        {setCount(count -1)
    }
    const onClickPlus = () => {
        setCount(count + 1)
        }
        
    return (
    <div>
    <h2>Counter:</h2>
    <h1>{count}</h1> 
    <button onClick={onClickMinus} className="minus">- Minus</button>
    <button onClick={onClickPlus} className="plus">Plus +</button>
 </div>
  )
}
