import React from 'react';
import { useNavigate } from "react-router-dom";

function LoginPage() {
	const  navigate = useNavigate()
	const submitLogin = (e) => {
		e.preventDefault()
		//get
		navigate("/posts")
	}
	return (
		<div>
			<h3>LoginPage</h3>
			<form onSubmit={submitLogin}>
				<input type="text" placeholder="Login"/>
				<input type="password" placeholder="password"/>
				<button type="submit">Вход</button>
			</form>
		</div>
	);
}

export default LoginPage;