import React, { useEffect } from 'react'
import { useDispatch} from 'react-redux'
import { addToCart} from '../../Redux/actions/cartActions'

const CartScreen = (props) => {
    const dispatch = useDispatch()
    const productId = props.match.params.id
    const qty = props.location.search.split('=')[1]

    useEffect(()=>{
        if(productId){
            dispatch(addToCart(productId,qty))
        }
    },[dispatch,productId, qty])
  
    return (
        <div>
            <h1>Cart screen</h1>
            <h2>Add to cart: {productId} quantity: {qty}</h2>
        </div>
    )
}

export default CartScreen
