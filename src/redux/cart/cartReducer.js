import { ADD_TO_CART,CLEAR_CART,SUB_FROM_CART,REQ_PLACE_ORDER,RES_PLACE_ORDER,ERR_PLACE_ORDER} from './cartType'

const initialState ={    
    cartData:{},
    totalQty:0,
    isPlacingOrder:false,
    placeOrderData:{status:false},
}

const cartReducer = (state=initialState,action) => {
    switch(action.type){
        case ADD_TO_CART:
            let addItemId = action.payload.id;
            let addcartData = state.cartData
            if(addcartData.hasOwnProperty(addItemId)){
                addcartData[addItemId].qty+=1
                return {
                    ...state,
                    cartData:addcartData,
                    totalQty:state.totalQty+1,
                }
            } else {
                addcartData[addItemId] =action.payload
                addcartData[addItemId].qty = 1                
                return{
                    ...state,
                    cartData:addcartData,
                    totalQty:state.totalQty+1
                }
            }

        case SUB_FROM_CART:
            let subitemid = action.payload.id;
            let subcartData = state.cartData
            subcartData[subitemid].qty-=1
            if(subcartData[subitemid].qty===0){
                delete subcartData[subitemid]
                return{
                    ...state,
                    cartData:subcartData,
                    totalQty:state.totalQty-1
                }
            }else{
                return{
                    ...state,
                    cartData:subcartData,
                    totalQty:state.totalQty-1
                }
            }

        case  CLEAR_CART: return{
            
        }

        case REQ_PLACE_ORDER: return{
            ...state,
            isPlacingOrder:true,
        }

        case RES_PLACE_ORDER: return{
            ...state,
            isPlacingOrder:false,
            cartData:{},
            totalQty:0,
            placeOrderData:action.payload
        }
        
        case ERR_PLACE_ORDER: return{
            ...state,
            isPlacingOrder:false,
        }

        default: return state
    }
}

export default cartReducer;
