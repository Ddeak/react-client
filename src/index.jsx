import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import { setClientId, setState, setConnectionState } from './actions'
import remoteActionMiddleware from './remote_action_middleware'
import reducer from './reducer'
import {Provider} from 'react-redux'
import getClientId from './client_id'
import App from './components/App'
import io from 'socket.io-client'
import Users from './components/users'

const socket = io(`${location.protocol}//${location.hostname}:8090`)

const createStoreWithMiddleware = applyMiddleware(
	remoteActionMiddleware(socket)
)(createStore)

const store = createStoreWithMiddleware(reducer);
store.dispatch(setClientId(getClientId()));


socket.on('state', state => 
	store.dispatch(setState(state))
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