import Axios from 'axios'
import {
    ORDER_REQUEST,
    ORDER_SUCCESS,
    ORDER_FAIL,
    ORDER_RESET,

} from '../actions/types/types'

import {cartEmpty} from './cartActions'

export const orderRequest = (order) => {
    return {
        type: ORDER_REQUEST,
        payload: order,
    }
}

export const orderSuccess = (data) => {
    return {
        type: ORDER_SUCCESS,
        payload: data,
    }
}

export const orderFail = (error) => {
    return {
        type: ORDER_FAIL,
        payload: error.message
        // error.response && error.response.data.message ?
        // error.response.data.message
        // : 
        

    }
}

export const orderReset = (data) => {
    return {
        type: ORDER_RESET,
        payload: data,
    }
}

export const createOrder = (order) => async(dispatch, getState) => {//Returns the current state tree of your application
    dispatch(orderRequest(order))
    try{
        const {auth: {userInfo}} = getState()
        console.log(userInfo)
        const {data} = await Axios.post('api/orders', order, {
            headers: {
                Authorization:`Bearer ${userInfo.token}`
            }
        })
        console.log(data.order)
        dispatch(orderSuccess(data.order))
        //empty cart
        dispatch(cartEmpty())
        localStorage.removeItem('cartItem')
    }catch(error) {
        dispatch(orderFail(error))
    }
}