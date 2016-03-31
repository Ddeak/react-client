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

export function setState(state) {
	console.log("state: " + JSON.stringify(state))
	return {
		type: 'SET_STATE',
		state
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