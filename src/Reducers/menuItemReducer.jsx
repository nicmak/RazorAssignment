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