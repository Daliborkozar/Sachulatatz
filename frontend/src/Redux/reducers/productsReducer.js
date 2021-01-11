
import {
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_FAIL,
    FETCH_DETAIL_REQUEST,
    FETCH_DETAIL_SUCCESS,
    FETCH_DETAIL_FAIL
} from '../actions/types/types'

const initialState = {
    products:[],
    loading: false,
    error: '',
    currentProduct: {},
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
                products: action.payload
            }
        case FETCH_PRODUCTS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case FETCH_DETAIL_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_DETAIL_SUCCESS:
            return {
                ...state,
                loading: false,
                currentProduct: action.payload 
            }
        case FETCH_DETAIL_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
            default: return state
        }
        
    }

export default productsReducer
