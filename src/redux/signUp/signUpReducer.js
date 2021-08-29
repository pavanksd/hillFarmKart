import {REQUEST_SIGNUP,SIGNUP_ERROR,SIGNUP_RESPONSE} from './signUpType'

const initialState ={    
    isRegistering:false,
    responseData:{},
    requestError:false
}


const signUpReducer = (state=initialState,action) => {
    switch(action.type){
        case REQUEST_SIGNUP: return {
            ...state,
            isRegistering:true,
        }
        case SIGNUP_RESPONSE: return{
            ...state,
            isRegistering:false,            
            responseData:action.payload
        }
        case SIGNUP_ERROR: return{
            ...state,
            isRegistering:false,
            requestError:true,
            responseData:{code:503}
        }
        default : return state
    }
}

export default signUpReducer;