import {
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNIN_FAIL, 
    USER_SIGNIN_SIGNOUT,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,

} from '../actions/types/types'

import Axios from 'axios'

export const userSigninRequest = (email,password) => {
    return{
        type: USER_SIGNIN_REQUEST,
        payload: {email,password}
    }
}

export const userRegisterRequest = () => {
    return {
        type: USER_REGISTER_REQUEST,
        payload: {}
    }
}

export const userSigninSuccess = (data) => {
    return {
        type: USER_SIGNIN_SUCCESS,
        payload: data
    }
}

export const userRegisterSuccess = (data) => {
    return {
        type: USER_REGISTER_SUCCESS,
        payload: data
    }
}

export const userSigninFail = (error) => {
    return{
        type: USER_SIGNIN_FAIL,
        payload: error.response && error.response.data.message ?
        error.response.data.message : error.message
        }
    }

export const userRegisterFail = (error) => {
    return{
        type: USER_REGISTER_FAIL,
        payload: error.response && error.response.data.message ?
        error.response.data.message : error.message
        }
    }


export const userSignout = () => {
    localStorage.removeItem('userInfo')
    localStorage.removeItem('cartItems')
    
    return {
        type: USER_SIGNIN_SIGNOUT
    }
}

export const register = (name,email,password) => async(dispatch) => {
    dispatch(userRegisterRequest(email,password))
    try{
        const {data} = await Axios.post('/api/users/register',{ name,email, password})
        console.log(data)
        dispatch(userRegisterSuccess(data))
        dispatch(userSigninSuccess(data))
        localStorage.setItem('userInfo', JSON.stringify(data))
    }catch(error){
        dispatch(userRegisterFail(error))
    }
}

export const signin = (email,password) => async(dispatch) => {
    dispatch(userSigninRequest())
    try{
        const {data} = await Axios.post('/api/users/signin',{email, password})
        dispatch(userSigninSuccess(data))
        localStorage.setItem('userInfo', JSON.stringify(data))
    }catch(error){
        dispatch(userSigninFail(error))
    }
}

