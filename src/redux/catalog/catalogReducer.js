import {LOAD_ITEMS_ERROR,LOAD_ITEMS_RESPONSE,LOAD_ITEMS_REQUEST} from './catalogType'

const initialState ={    
    catalogItems:[],
    isLoading:false,    
    requestError:false
}

const catalogReducer = (state=initialState,action) => {
    switch(action.type){
        case LOAD_ITEMS_REQUEST: return {
            ...state,
            isLoading:true,
        }
        case LOAD_ITEMS_RESPONSE: return{
            ...state,
            isLoading:false,
            catalogItems:action.payload,
            requestError:false
        }
        case LOAD_ITEMS_ERROR: return{
            ...state,
            isLoading:false,
            requestError:true,
            catalogItems:[]
        }
        default : return state
    }
}

export default catalogReducer;