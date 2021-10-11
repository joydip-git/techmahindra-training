import { Reducer } from 'react'
import { AnyAction } from 'redux'
import ProductViewModel from '../../models/productview.model'
import * as ActionTypes from '../action-types/index'

export type productsStateType = {
    loading: boolean,
    products: ProductViewModel[],
    error: string
}
const productsInitialState: productsStateType = {
    loading: true,
    products: [],
    error: ''
}
const getProductsReducer: Reducer<productsStateType, AnyAction> = (state = productsInitialState, action: AnyAction) => {
    let newState = null
    switch (action.type) {
        case ActionTypes.GET_PRODUCTS_SUCCESS:
            newState = {
                ...state,
                products: action.data,
                loading: false,
                error: ''
            }
            break;
        case ActionTypes.GET_PRODUCTS_FAILURE:
            newState = {
                ...state,
                products: [],
                loading: false,
                error: action.data
            }
            break;
        default:
            newState = {
                ...state
            }
            break;
    }
    return newState
}
export default getProductsReducer