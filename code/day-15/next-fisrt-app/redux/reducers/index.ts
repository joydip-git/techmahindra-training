import { Reducer } from 'react'
import { AnyAction, combineReducers } from 'redux'
import counterReducer, { counterStateType } from './counterReducer'
import getProductsReducer, { productsStateType } from './getProductsReducer'

export type combinedStateType = {
    counterState: counterStateType
    productsState: productsStateType
}

const rootReducer = combineReducers({
    counterState: counterReducer,
    productsState: getProductsReducer
})
export default rootReducer