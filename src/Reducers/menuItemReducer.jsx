const menuItemReducer = (state = {component:'Profile'}, action) => {
	switch(action.type) {
		case 'SHOW_COMPONENT': {
			return {...state, 
				component:action.payload.component
			}
		}
	}
	return state;
}

export default menuItemReducer

//MenuItemReducer is used toggle between Profile and Data Bar,
// the initial state as shown on line 1 is Profile 