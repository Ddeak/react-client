import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as actions from '../actions'

import NewUser from './NewUser'
import { addUser, deleteUser } from '../actions'

export const Users = React.createClass({
	mixins: [PureRenderMixin],
	render: function() {
		return <div>
			<h1>Users</h1>
			<NewUser handleSubmit={() => {
				let user = {};
				user.forename = document.getElementById('forenameInput').value;
				user.surname = document.getElementById('surnameInput').value;;

				this.props.addUser(user);
				
			}} />
			
			{this.props.state.get('users') ?
			 this.props.state.get('users').map((user, index) => <p key={index}>{user.get('forename')}, {user.get('surname')} <button onClick={e => {
					this.props.deleteUser(index)
				}} >X</button> </p>) : 
			 null}
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