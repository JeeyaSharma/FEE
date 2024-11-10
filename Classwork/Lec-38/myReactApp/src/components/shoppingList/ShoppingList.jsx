import React from 'react'
import Products from '../products/Products'

const ShoppingList = () => {

    const products=[
        {
            imgUrl: 'https://images.unsplash.com/photo-1726839653653-7e08b05344ac?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGlwaG9uZSUyMDE2fGVufDB8fDB8fHww',
            name:'Iphone 16',
            price:86000
        },
        {
            imgUrl:'https://images.unsplash.com/photo-1615529882128-03f9275523c8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGlwYWR8ZW58MHx8MHx8fDA%3D',
            name:'Ipad',
            price:120000
        },
        {
            imgUrl:'https://plus.unsplash.com/premium_photo-1676998931123-75789162f170?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1hY2Jvb2t8ZW58MHx8MHx8fDA%3D',
            name:'MacBook',
            price:180000
        }
    ]
  return (
    <section>
        {
            products.map((product) =>{
                return <Products
                name={product.name} 
                imgUrl= {product.imgUrl}
                price={product.price}
                />
            })
        }
    </section>
  )
}

export default ShoppingList