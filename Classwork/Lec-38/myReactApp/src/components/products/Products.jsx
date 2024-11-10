import React, { useState } from 'react'
import './Products.css'

const Products = (props) => {
    // let price=props.price
    let [price,setPrice]=useState(props.price)

    let priceHandler= () =>{
        setPrice(10);
    }
  return (
    <figure class="products" onClick={priceHandler}>
        <img src={props.imgUrl} alt={props.name} />
        <h2>Product Name: {props.name}</h2>
        <h2>Price: Rs.{props.price}</h2>
    </figure>
  )
}

export default Products