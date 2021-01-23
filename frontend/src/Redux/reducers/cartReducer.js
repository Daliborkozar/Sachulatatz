
import {
    CART_ADD_ITEM,
    CART_ADD_SHIPPING_ADDRESS,
    CART_REMOVE_ITEM

} from '../actions/types/types'

const initialState = {
    cartItem: localStorage.getItem('cartItem') ? JSON.parse(localStorage.getItem('cartItem')) : [],
    shippingAddress: {}
    
}

const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case CART_ADD_ITEM: 
            const item = action.payload
            const existItem = state.cartItem.find((x) => x.product === item.product)
            const existSize = state.cartItem.find(x => x.size === item.size)
            if(existItem && existSize){
            return {
                ...state,
                cartItem: state.cartItem.map((x) => x.product === existItem.product && x.size === existSize.size ? item : x),
                }
            }else {
                return {
                    ...state,
                    cartItem:[...state.cartItem, item]
                }
            }
        case CART_REMOVE_ITEM:
            return {
                ...state,
                cartItem: state.cartItem.filter(x => x.product !== action.payload)

            }
        case CART_ADD_SHIPPING_ADDRESS:
            return {
                ...state,
                shippingAddress: action.payload
            }
            default:
                return state
        }    
    }

export default cartReducer