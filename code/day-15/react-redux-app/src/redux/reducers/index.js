import { combineReducers } from 'redux'
import counterReducer from './counterReducer'
import getProductsReducer from './getProductsReducer'

const rootReducer = combineReducers({
    counterState: counterReducer,
    productsState: getProductsReducer
})
export default rootReducer