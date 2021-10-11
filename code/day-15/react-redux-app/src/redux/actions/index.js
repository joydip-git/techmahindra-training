import * as ActionTypes from '../action-types/index'
export const increaseCounterAction = (value) => {
    return {
        type: ActionTypes.INCREASE_COUNTER,
        data: value
    }
}
export const decreaseCounterAction = (value) => {
    return {
        type: ActionTypes.DECREASE_COUNTER,
        data: value
    }
}
export const getDataSuccessAction = (allProcucts) => {
    return {
        type: ActionTypes.GET_PRODUCTS_SUCCESS,
        data: allProcucts
    }
}

export const getDataFailureAction = (err) => {
    return {
        type: ActionTypes.GET_PRODUCTS_FAILURE,
        data: err
    }
}