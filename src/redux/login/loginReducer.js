import {REQUEST_LOGIN,LOGIN_ERROR,LOGIN_RESPONSE} from './loginType'

const initialState ={    
    isAuthenticating:false,
    responseData:{},
    requestError:false
}


const loginReducer = (state=initialState,action) => {
    switch(action.type){
        case REQUEST_LOGIN: return {
            ...state,
            isAuthenticating:true,
        }
        case LOGIN_RESPONSE: return{
            ...state,
            isAuthenticating:false,            
            responseData:action.payload
        }
        case LOGIN_ERROR: return{
            ...state,
            isAuthenticating:false,
            requestError:true,
            responseData:{code:503}
        }
        default : return state
    }
}

export default loginReducer;