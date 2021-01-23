import {
    CART_ADD_ITEM,
    CART_REMOVE_ITEM,
    CART_ADD_SHIPPING_ADDRESS,

} from '../actions/types/types'

import Axios from 'axios'

export const addItems = (data,qty,size) => {
    return {
        type: CART_ADD_ITEM,
        payload: {
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            product: data._id,
            qty,
            size,
        },
        
    } 
}

export const removeItems = (productId) => {
    return {
        type: CART_REMOVE_ITEM,
        payload: productId
    }
}


export const addShipping = (data) =>{
    return {
        type: CART_ADD_SHIPPING_ADDRESS,
        payload: data
    }
}

//ADD and REMOVE ITEMS from cart
export const addToCart = (productId,qty,size)=> async(dispatch, getState) => {
    const {data} = await Axios.get(`/api/products/${productId}`)
    dispatch(addItems(data,qty,size))
    localStorage.setItem('cartItem', JSON.stringify(getState().cart.cartItem))
}

export const removeFromCart = (productId) => async(dispatch, getState) => {
    dispatch(removeItems(productId))
    localStorage.setItem('cartItem', JSON.stringify(getState().cart.item))
}

export const saveShippingAddress = (data) => (dispatch) =>{
    dispatch(addShipping(data))
    localStorage.setItem('shippingAddress', JSON.stringify(data))
}

