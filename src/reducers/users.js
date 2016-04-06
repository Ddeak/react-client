import { Map, List } from 'immutable'

function setState(state, newState) {
	return List(newState)
}

export default function(state = Map(), action) {
	switch (action.type) {
		case 'ADD_USER':
			return state.unshift(action.user)
		case 'DELETE_USER':
			return state.delete(action.user_id)
		case 'SET_USER_STATE':
			return setState(state, action.state.users)
		default:
			return state
	}
}