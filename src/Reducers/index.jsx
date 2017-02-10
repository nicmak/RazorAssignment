import {combineReducers} from 'redux'
import menuItemReducer from './menuItemReducer'
import personInfoReducer from './personInfoReducer'

export default combineReducers({
	
	menuItemReducer,
	personInfoReducer

})

//We are simply importing reducers and combining them together