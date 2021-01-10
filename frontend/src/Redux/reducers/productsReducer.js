import data from "../../data/data"
import {
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_FAIL
} from '../actions/types/types'

const initialState = {
    products: [],
    loading: false,
    error: ''
}

const productsReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_PRODUCTS_REQUEST: 
            return {
                ...state,
                loading: true,
            }
        case FETCH_PRODUCTS_SUCCESS: 
            return {
                ...state,
                loading: false,
                products: action.payload.products
            }
            default: return state
        }
        
    }


export default productsReducer