import { combineReducers } from 'redux'
import core from './core'
import users from './users'

export const rootReducer = combineReducers({
	core,
	users
});