const { default: axios } = require("axios")
const { createStore, applyMiddleware, combineReducers } = require("redux")
const { createLogger } = require("redux-logger")
const { default: thunk } = require("redux-thunk")

const logger = createLogger()

//action-types
const INCREASE_COUNTER = 'INCREASE_COUNTER'
const DECREASE_COUNTER = 'DECREASE_COUNTER'
const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS'
const GET_PRODUCTS_FAILURE = 'GET_PRODUCTS_FAILURE'

//actions
// const increaseCounterAction = {
//     type: INCREASE_COUNTER,
//     data: 2
// }
// const decreaseCounterAction = {
//     type: DECREASE_COUNTER,
//     data: 1
// }

//action-creators
const increaseCounterAction = (value) => {
    return {
        type: INCREASE_COUNTER,
        data: value
    }
}
const decreaseCounterAction = (value) => {
    return {
        type: DECREASE_COUNTER,
        data: value
    }
}
const getDataSuccessAction = (allProcucts) => {
    return {
        type: GET_PRODUCTS_SUCCESS,
        data: allProcucts
    }
}

const getDataFailureAction = (err) => {
    return {
        type: GET_PRODUCTS_FAILURE,
        data: err
    }
}

//state
const counterInitialState = {
    counter: 0
}
const productsInitialState = {
    loading: true,
    products: [],
    error: ''
}

//reducer
const counterReducer = (state = counterInitialState, action) => {
    let newState = null;
    switch (action.type) {
        case INCREASE_COUNTER:
            newState = {
                ...state,
                counter: state.counter + action.data
            }
            break;

        case DECREASE_COUNTER:
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

const getProductsReducer = (state = productsInitialState, action) => {
    let newState = null
    switch (action.type) {
        case GET_PRODUCTS_SUCCESS:
            newState = {
                ...state,
                products: action.data,
                loading: false,
                error: ''
            }
            break;
        case GET_PRODUCTS_FAILURE:
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

// const store = {
//     states: [{counter:3},{}],
//     reducers: [counterReducer],
//     dispatch: function (action) {
//         this.states[0] = this.reducers[0](this.states[0], action)
//         this.states.push(this.reducers[0](this.states[0], action))
//     },
//     getState: function () {
//         return this.states[0]
//     }
// }
const rootReducer = combineReducers({
    a: counterReducer,
    b: getProductsReducer
})
const store = createStore(
    rootReducer,
    applyMiddleware(logger, thunk)
)
// console.log(store.getState())
store.dispatch(increaseCounterAction(2))
// console.log(store.getState())
store.dispatch(increaseCounterAction(3))
// console.log(store.getState())
store.dispatch(decreaseCounterAction(1))
// console.log(store.getState())
store.dispatch(decreaseCounterAction(2))
// console.log(store.getState())

// fetch('http://localhost:8000/products/all')
//     .then(
//         (resp) => {
//             resp
//                 .json()
//                 .then(
//                     (data) => {
//                         store.dispatch(getDataSuccessAction(data))
//                     },
//                     (e) => {
//                         store.dispatch(getDataFailureAction(e))
//                     }
//                 )

//         },
//         (err) => {
//             store.dispatch(getDataFailureAction(err))
//         }
//     )

const getProductsAsync = (dispatch) => {
    setTimeout(() => {
        axios.get('http://localhost:8000/products/alll')
            .then(
                (resp) => {
                    //store.dispatch(getDataSuccessAction(resp.data))
                    dispatch(getDataSuccessAction(resp.data))
                },
                (err) => {
                    //store.dispatch(getDataFailureAction(err))
                    dispatch(getDataFailureAction(err.message))
                }
            )

    }, 5000)
}

store.dispatch(getProductsAsync)