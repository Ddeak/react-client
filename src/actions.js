export function setClientId(clientId) {
	return {
		type: 'SET_CLIENT_ID',
		clientId
	}
}

export function setConnectionState(state, connected) {
	return {
		type: 'SET_CONNECTION_STATE',
		state,
		connected
	}
}

export function setCoreState(state) {
	return {
		type: 'SET_CORE_STATE',
		state
	}
}

export function setUsersState(state) {
	return {
		type: 'SET_USER_STATE',
		state
	}
}

export function allUsers(state) {
	return {
		meta: {remote: true},
		type: 'ALL_USER'
	}
}

export function addUser(user) {
	return {
		meta: {remote: true},
		type: 'ADD_USER',
		user: {
			forename: user.forename,
			surname: user.surname
		}
	}
}

export function deleteUser(index) {
	return {
		meta: {remote: true},
		type: 'DELETE_USER',
		user_id: index
	}
}

export function deleteUserLocal(index) {
	return {
		type: 'DELETE_USER',
		user_id: index
	}
}