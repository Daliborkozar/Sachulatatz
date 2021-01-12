import React from 'react'

const CartScreen = (props) => {
    const productId = props.match.params.id
    const qty = props.location.search.split('=')[1]
  
    return (
        <div>
            <h1>Cart screen</h1>
            <h2>Add to cart: {productId} quantity: {qty}</h2>
        </div>
    )
}

export default CartScreen
