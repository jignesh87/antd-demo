import React, { useState } from 'react';

async function loginUser(credentials) {
	return fetch('http://localhost:8000/api/login', {
	  method: 'POST',
	  headers: {
		'Content-Type': 'application/json'
	  },
	  body: JSON.stringify(credentials)
	})
	  .then(data => data.json())
}

function Login({ setToken }) {
	const [email, setUserName] = useState();
	const [password, setPassword] = useState();

	const handleSubmit = async e => {
		e.preventDefault();
		const token = await loginUser({
			email,
			password
		});
		setToken(token);
	}

  	return(
		<form onSubmit={handleSubmit}>
		<label>
			<p>Username</p>
			<input type="text" onChange={e => setUserName(e.target.value)}/>
		</label>
		<label>
			<p>Password</p>
			<input type="password" onChange={e => setPassword(e.target.value)}/>
		</label>
		<div>
			<button type="submit">Submit</button>
		</div>
		</form>
    )
}
export default Login;
