import * as ActionTypes from '../action-types/index'
const productsInitialState = {
    loading: true,
    products: [],
    error: ''
}
const getProductsReducer = (state = productsInitialState, action) => {
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