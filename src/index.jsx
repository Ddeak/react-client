// React
import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'

// Redux
import { createStore, applyMiddleware } from 'redux'
import {Provider} from 'react-redux'
import { rootReducer } from './reducers/rootReducer'

// Local
import getClientId from './client_id'
import App from './components/App'
import { setClientId, setUsersState, setCoreState, setConnectionState } from './actions'
import remoteActionMiddleware from './remote_action_middleware'
import Users from './components/users'

// Libs
import io from 'socket.io-client'
import objectAssign from 'object-assign'

const socket = io(`${location.protocol}//${location.hostname}:8090`)

const createStoreWithMiddleware = applyMiddleware(
	remoteActionMiddleware(socket)
)(createStore)

const store = createStoreWithMiddleware(rootReducer);
store.dispatch(setClientId(getClientId()))

socket.on('state', state => {
		state = objectAssign({}, store.getState(), state)
		store.dispatch(setCoreState(state))
		store.dispatch(setUsersState(state))
	}
);

[
	'connect',
	'connect_error',
	'connect_timeout',
	'reconnect',
	'reconnecting',
	'reconnect_error',
	'reconnect_failed'
].forEach(ev =>
	socket.on(ev, () => store.dispatch(setConnectionState(ev, socket.connected)))
);

const routes = <Route component={App}>
		<Route path="/" component={Users} />
	</Route>;

ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>{routes}</Router>
	</Provider>,
	document.getElementById('app')
);