import { createStore, applyMiddleware, Store, AnyAction } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer, { combinedStateType } from '../reducers/index'
import { composeWithDevTools } from 'redux-devtools-extension'

const logger = createLogger()
let store: Store;
if (process.env.NODE_ENV === 'production') {
    store = createStore(
        rootReducer,
        applyMiddleware(thunk)
    )
} else {
    store = createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(logger, thunk))
    )
}
export default store