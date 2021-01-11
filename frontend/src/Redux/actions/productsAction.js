import {
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_FAIL
} from '../actions/types/types'

import Axios from 'axios'


export const fetchProductRequest = () => {
    return {
        type: FETCH_PRODUCTS_REQUEST
    }
}

export const fetchProductSuccess = (products) => {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: products
    }
}

export const fetchProductsFail = (error) => {
    return {
        type: FETCH_PRODUCTS_FAIL,
        payload: error
    }
}

//fetch middleware

export const fetchProductList = () => async (dispatch) =>{
    //loading: true
    dispatch(fetchProductRequest())
    try {
        const {data} = await Axios.get('/api/products')
        dispatch(fetchProductSuccess(data))
    } catch(error) {
        dispatch(fetchProductsFail(error.message))
    };
}