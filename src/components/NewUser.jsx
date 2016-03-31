import React from 'react'

const NewUser = ({handleSubmit}) => (
	<div>
		<h3>Add User</h3>
		<div id="add-user-form">
			<input type="text" placeholder="Forename" id="forenameInput" />
			<input type="text" placeholder="Surname" id="surnameInput" />
			<input type="submit" value="Ok!" onClick={handleSubmit} />
		</div>
	</div>
)

export default NewUser