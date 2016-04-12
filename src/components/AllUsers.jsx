import React from 'react'

class AllUsers extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return <div>
			{this.props.users ?
			 this.props.users.map((user, index) => <p key={index}>{user.forename}, {user.surname} <button onClick={e => {
					this.props.deleteUx(user.id)
				}} >X</button> </p>) : 
			 null}
		</div>;
	}	
}

export default AllUsers