import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as actions from '../actions'

import NewUser from './NewUser'
import AllUsers from './AllUsers'
import { addUser, deleteUser } from '../actions'

export const Users = React.createClass({
	mixins: [PureRenderMixin],

	addU: function() {
		let user = {};
		user.forename = document.getElementById('forenameInput').value;
		user.surname = document.getElementById('surnameInput').value;

		this.props.addUser(user);
	},

	deleteU: function(index) {
		this.props.deleteUser(index);
	},

	render: function() {
		return <div>
			<h1>Users</h1>
			<NewUser handleSubmit={this.addU} />

			<AllUsers deleteUx={this.deleteU} users={this.props.state.users} />
		</div>
	}
})

function mapStateToProps(state) {
	return {
		state
	}
}

export default connect(
	mapStateToProps,
	actions
)(Users);