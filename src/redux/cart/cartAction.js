import { ADD_TO_CART,CLEAR_CART,SUB_FROM_CART,REQ_PLACE_ORDER,RES_PLACE_ORDER,ERR_PLACE_ORDER} from './cartType'
import axios from 'axios'

import {constant} from '../../constants'

export const addToCart = (data)=> {
    return{
        type : ADD_TO_CART,
        payload:data
    }
};

export const subFromCart = (data)=> {
    return{
        type : SUB_FROM_CART,
        payload:data
    }
};

export const clearCart = ()=>{
    return{
        type : CLEAR_CART,
    }
}

export const reqPlaceOrder = ()=>{
    return{
        type : REQ_PLACE_ORDER,
    }
}

export const resPlaceOrder = (data)=>{
    return{
        type : RES_PLACE_ORDER,
        payload:data
    }
}
export const errPlaceOrder = ()=>{
    return{
        type : ERR_PLACE_ORDER,
    }
}

export const confirmOrder = (cartItems,userData) =>{
    const data = {'cartItems':cartItems,'userData':userData}
    return (dispatch) =>{
        dispatch(reqPlaceOrder())        
        axios.post(constant.API_BASE_URL+"/api/v1/order/checkout",data,{timeout:10000}).then(response =>{
            dispatch(resPlaceOrder(response.data));
        }).catch(error =>{            
            dispatch(errPlaceOrder());
        })
    }
}