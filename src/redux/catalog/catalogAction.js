import {LOAD_ITEMS_ERROR,LOAD_ITEMS_RESPONSE,LOAD_ITEMS_REQUEST} from './catalogType'
import axios from 'axios';

import {constant} from '../../constants'

export const loadItemReq = () =>{
    return{
        type: LOAD_ITEMS_REQUEST,
    }
}

export const loadItemRes = (data) =>{
    return{
        type: LOAD_ITEMS_RESPONSE,
        payload:data
    }
}

export const loadItemErr = () =>{
    return{
        type: LOAD_ITEMS_ERROR,
    }
}

export const getItemsList = ()=>{    
    return (dispatch) =>{
        dispatch(loadItemReq())
        axios.get(constant.API_BASE_URL+"/api/v1/catalog/items",{timeout:10000}).then(response =>{
            dispatch(loadItemRes(response.data));
        }).catch(error =>{
            dispatch(loadItemErr());
        })
    }
}