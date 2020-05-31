import {REQUEST_LOGIN,LOGIN_ERROR,LOGIN_RESPONSE} from './loginType'

const initialState ={    
    isAuthenticating:false,
    responseData:{},
    requestError:false
}


const loginReducer = (state=initialState,action) => {
    switch(action.type){
        case REQUEST_LOGIN: return {
            responseData:{},
            isAuthenticating:true,
            requestError:false
        }
        case LOGIN_RESPONSE: return{
            ...state,
            isAuthenticating:false,            
            responseData:action.payload
        }
        case LOGIN_ERROR: return{
            isAuthenticating:false,
            requestError:true,
            responseData:{code:503}
        }
        default : return {
            isAuthenticating:false,
            responseData:{},
            requestError:false
        }
    }
}

export default loginReducer;