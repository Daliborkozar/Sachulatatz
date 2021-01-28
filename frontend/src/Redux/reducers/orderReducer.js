import {
  ORDER_REQUEST,
  ORDER_SUCCESS,
  ORDER_FAIL,
  ORDER_RESET,
} from "../actions/types/types";

const initialState = {
    loading: false,
    success: false,
    order:{}
    
}

const orderReducer = (state=initialState , action) => {
    switch(action.type){
        case ORDER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                order: action.payload
            }
        case ORDER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case ORDER_RESET:
            return initialState

        default: return state
           
    }
}

export default orderReducer