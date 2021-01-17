import {
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNIN_FAIL, 
    USER_SIGNIN_SIGNOUT,

} from '../actions/types/types'

import Axios from 'axios'

export const userSigninRequest = (email,password) => {
    return{
        type: USER_SIGNIN_REQUEST,
        payload: {email , password}
    }
}

export const userSigninSuccess = (data) => {
    return {
        type: USER_SIGNIN_SUCCESS,
        payload: data
    }
}

export const userSigninFail = (error) => {
    return{
        type: USER_SIGNIN_FAIL,
        payload: error
        }
    }


// export const userSignout = () => {
//     return {
//         type: USER_SIGNIN_SIGNOUT
//     }
// }


export const signin = (email,password) => async(dispatch) => {
    dispatch(userSigninRequest(email,password))
    try{
        const {data} = await Axios.post('/api/users/signin',{email, password})
        dispatch(userSigninSuccess(data))
        localStorage.setItem('userInfo', JSON.stringify(data))
    }catch(error){
        dispatch(userSigninFail(error.message))
    }
}