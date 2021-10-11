import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/index'
import { composeWithDevTools } from 'redux-devtools-extension'

const logger = createLogger()
let store
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