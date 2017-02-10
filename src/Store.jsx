import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import reducers from './Reducers/index.jsx'

const middleware = applyMiddleware(thunk, logger())

//createStore, used to incorporate the combined users and middlware
// thunk middleware is used to make ajax calls, while logger tracks the before and after state,
//check the Chrome Dev tools to see logger
export default createStore(reducers, middleware)

