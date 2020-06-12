import {combineReducers} from 'redux'

import loginReducer from './login/loginReducer'
import catalogReducer from './catalog/catalogReducer'
import cartReducer from './cart/cartReducer'

const rootReducer = combineReducers({
    login:loginReducer,
    catalog:catalogReducer,
    cart:cartReducer,
})

export default rootReducer;