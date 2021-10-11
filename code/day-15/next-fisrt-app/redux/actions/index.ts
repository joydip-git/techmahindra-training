import { AnyAction } from 'redux'
import * as ActionTypes from '../action-types/index'
type actionCreatorType = (value?: any) => AnyAction
export const increaseCounterAction: actionCreatorType = (value) => {
    return {
        type: ActionTypes.INCREASE_COUNTER,
        data: value
    }
}
export const decreaseCounterAction: actionCreatorType = (value) => {
    return {
        type: ActionTypes.DECREASE_COUNTER,
        data: value
    }
}
export const getDataSuccessAction: actionCreatorType = (allProcucts) => {
    return {
        type: ActionTypes.GET_PRODUCTS_SUCCESS,
        data: allProcucts
    }
}

export const getDataFailureAction: actionCreatorType = (err) => {
    return {
        type: ActionTypes.GET_PRODUCTS_FAILURE,
        data: err
    }
}