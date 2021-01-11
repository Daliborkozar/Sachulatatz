import {
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_FAIL,

    FETCH_DETAIL_REQUEST,
    FETCH_DETAIL_SUCCESS,
    FETCH_DETAIL_FAIL,
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

export const fetchDetailRequest = (id) => {
    return {
        type: FETCH_DETAIL_REQUEST,
        payload: id
    }
}

export const fetchDetailSuccess = (data) => {
    return {
        type: FETCH_DETAIL_SUCCESS,
        payload: data
    }
}

export const fetchDetailFail = (error) => {
    return {
        type: FETCH_DETAIL_FAIL,
        payload: error
    }
}

//fetch middleware

//product list fetch
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

//product details fetch

export const fetchProductDetails = (productId) => async (dispatch) => {
    dispatch(fetchDetailRequest(productId))
    try{ 
        const {data} = await Axios.get(`/api/products/${productId}`)
        dispatch(fetchDetailSuccess(data))
        
    } catch (error)  {
        dispatch(fetchDetailFail(error.message))
    }
}