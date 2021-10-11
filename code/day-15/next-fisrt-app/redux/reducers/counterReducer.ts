import { Reducer } from 'react';
import { Action, AnyAction } from 'redux';
import * as ActionTypes from '../action-types/index'

export type counterStateType = {
    counter: number
}
const counterInitialState: counterStateType = {
    counter: 0
}
const counterReducer: Reducer<counterStateType, AnyAction> = (state = counterInitialState, action: AnyAction) => {
    let newState = null;
    switch (action.type) {
        case ActionTypes.INCREASE_COUNTER:
            newState = {
                ...state,
                counter: state.counter + action.data
            }
            break;

        case ActionTypes.DECREASE_COUNTER:
            newState = {
                ...state,
                counter: state.counter - action.data
            }
            break;

        default:
            newState = { ...state }
            break;
    }
    return newState
}

export default counterReducer