
import {
    CART_ADD_ITEM,
    CART_REMOVE_ITEM

} from '../actions/types/types'

const initialState = {
    cartItem: [] //localStorage.getItem('cartItem') ? JSON.parse(localStorage.getItem('cartItem')) : []
}

const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case CART_ADD_ITEM: 
            const item = action.payload;
            //const existItem = state.cartItem.find(x => x.product === item.product)
            // if(existItem){
            // return {
            //     ...state,
            //     cartItem: state.cartItem.map((x) => x.product === existItem.product ? item : x),
            //     }
            // }else {
                return {...state, cartItem:[...state.cartItem, item]}
            
            default:
                return state
        }    
    }

export default cartReducer