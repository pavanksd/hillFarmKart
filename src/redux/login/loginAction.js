import {REQUEST_LOGIN,LOGIN_RESPONSE,LOGIN_ERROR} from './loginType'
import axios from 'axios'

import {constant} from '../../constants'

export const requestLogin = () =>{
    return{
        type: REQUEST_LOGIN,
    }
}

export const loginResponse = (data) =>{
    return{
        type: LOGIN_RESPONSE,
        payload:data
    }
}

export const loginError = () =>{
    return{
        type: LOGIN_ERROR,
    }
}

export const resetState = () =>{
    return{
        type:'NOT_DEFINED'
    }
}

export const authUser = (email,password)=>{
    const data = {'email':email,'password':password}
    return (dispatch) =>{
        dispatch(requestLogin())
        axios.post(constant.API_BASE_URL+"/api/v1/user/login",data,{timeout:10000}).then(response =>{
            dispatch(loginResponse(response.data));
        }).catch(error =>{
            dispatch(loginError());
        })
    }
}