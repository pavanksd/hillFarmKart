import {REQUEST_SIGNUP,SIGNUP_RESPONSE,SIGNUP_ERROR} from './signUpType'
import axios from 'axios'

import {constant} from '../../constants'

export const requestSignUp = () =>{
    return{
        type: REQUEST_SIGNUP,
    }
}

export const SignUpResponse = (data) =>{
    return{
        type: SIGNUP_RESPONSE,
        payload:data
    }
}

export const SignUpError = () =>{
    return{
        type: SIGNUP_ERROR,
    }
}


export const signUpUser = ({userName,password,email}) =>{
    const data = {'name':userName,'password':password,'email':email}
    return(dispatch)=>{
        dispatch(requestSignUp())
        axios.post(constant.API_BASE_URL+"/api/v1/user/register",data,{timeout:10000}).then(response =>{
            dispatch(SignUpResponse(response.data));
        }).catch(error =>{
            dispatch(SignUpError());
        })
    }
}