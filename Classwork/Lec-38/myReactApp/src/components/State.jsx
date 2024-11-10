import React from 'react'
import {useState} from 'react';

const State = () => {
    // let count=0;
    console.log(useState());
    let [count,setCount]=useState(0)
    let countHandler=() =>{
        setCount(count+1);
        console.log(count);
    }
    
  return (

    <div>
        <h1>Count is: {count}</h1>
        <button onClick={countHandler}>Increase Count</button>
    </div>
  )
}

export default State