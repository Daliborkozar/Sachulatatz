import {
    CART_ADD_ITEM,
    CART_REMOVE_ITEM

} from '../actions/types/types'

import Axios from 'axios'

export const addItems = (data,qty) => {
    return {
        type: CART_ADD_ITEM,
        payload: {
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            product: data._id,
            qty,
        }
    }
}


//ADD and REMOVE ITEMS from cart
export const addToCart = (productId, qty)=> async(dispatch, getState) => {
    const {data} = await Axios.get(`/api/products/${productId}`)
    dispatch(addItems(data,qty))
}