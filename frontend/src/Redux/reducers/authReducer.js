import {
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNIN_FAIL, 
    USER_SIGNIN_SIGNOUT,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,

} from '../actions/types/types'

const initialState = {
    isLoggedIn: false,
    loading: false,
    error: "",
    userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null,
}

const authReducer = (state=initialState, action) => {
    switch(action.type){
        case USER_SIGNIN_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case USER_SIGNIN_SUCCESS:
            return {
                ...state,
                loading: false,
                userInfo: action.payload,
                isLoggedIn: true
            }
        case USER_SIGNIN_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case USER_SIGNIN_SIGNOUT:
            return {
                initialState
            }
        case USER_REGISTER_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case USER_REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                userRegister: action.payload,
            }
        case USER_REGISTER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default: return state
    }
}

export default authReducer