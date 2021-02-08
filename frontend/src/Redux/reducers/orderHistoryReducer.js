
import {
    ORDER_HISTORY_REQUEST,
    ORDER_HISTORY_SUCCESS,
    ORDER_HISTORY_FAIL,
} from '../actions/types/types'


const initialState = {
    orders:[],
    loading: false,
    error: null
}

const orderHistoryReducer = (state = initialState, action) =>{
    switch(action.type) {
        case ORDER_HISTORY_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ORDER_HISTORY_SUCCESS:
            return {
                ...state,
                loading: false,
                orders: action.payload
            }
        case ORDER_HISTORY_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default: return state
    }
}

export default orderHistoryReducer