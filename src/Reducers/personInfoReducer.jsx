const personInfoReducer = (state=null, action) => {
	switch(action.type) {
		case 'PERSON_INFO': {
			return {...state, 
				info:action.payload.info
			}
		}
	}
	return state;
}

export default personInfoReducer
