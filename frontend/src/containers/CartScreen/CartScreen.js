import React, { useEffect } from 'react'
import { useDispatch} from 'react-redux'
import { useLocation } from 'react-router-dom'
import { addToCart} from '../../Redux/actions/cartActions'

const CartScreen = (props) => {
    const dispatch = useDispatch()
    const search = useLocation().search
    const qty= new URLSearchParams(search).get('qty')
    const size = new URLSearchParams(search).get('size')
    
    const productId = props.match.params.id
    // const qty = props.location.search.split('=')[1]

    useEffect(()=>{
        if(productId){
            dispatch(addToCart(productId,qty,size))
        }
    },[dispatch,productId, qty,size])
  
    return (
        <div>
            <h1>Vasa korpa</h1>
            <div>
                <label></label>

            </div>
            <h2>Add to cart: {productId} quantity: {qty} size: {size}</h2>
        </div>
    )
}

export default CartScreen
