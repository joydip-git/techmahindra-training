import * as ActionTypes from '../action-types/index'
const counterInitialState = {
    counter: 0
}
const counterReducer = (state = counterInitialState, action) => {
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