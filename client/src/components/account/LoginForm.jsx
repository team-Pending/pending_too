import React from 'react';
import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_GET_USER } from '../../utils/queries';
import Mediaphile from '../Mediaphile';
import { useAuth } from '../../utils/auth';

const LoginForm = () => {
	const { handleLogin, handleSignup, getUserData, error } = useAuth();
	const [signUp, setSignUp] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [username, setUsername] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setlastName] = useState('');
	// const { data, loading } = useQuery(QUERY_GET_USER, {
	// 	variables: { email: email },
	// });

	const handleSubmit = async(e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		console.log(Object.fromEntries(formData));
		await handleLogin({ email, password });
		setEmail(email);
		setPassword('');
		location.reload();
	};

	const handleSignUpButton = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		handleSignup({ username, firstName, lastName, email, password });
		setEmail('');
		setPassword('');
	};

	const handleSwitchToSignUp = () => {
		setSignUp(true);
	};
	const handleSwitchToLogin = () => {
		setSignUp(false);
	};
	if (signUp) {
		return (
			<div className="login-form">
				<h2>Sign Up!</h2>
				<form onSubmit={handleSignUpButton}>
					<input
						type="text"
						name="email"
						id="email"
						required
						value={email}
						onChange={(event) => setEmail(event.target.value)}
						placeholder="Enter Email Address"
					/>
					<input
						type="text"
						name="username"
						id="username"
						required
						value={username}
						onChange={(event) => setUsername(event.target.value)}
						placeholder="Enter Username"
					/>
					<input
						type="text"
						name="firstName"
						id="firstName"
						required
						value={firstName}
						onChange={(event) => setFirstName(event.target.value)}
						placeholder="Enter First Name"
					/>
					<input
						type="text"
						name="lastName"
						id="lastName"
						required
						value={lastName}
						onChange={(event) => setlastName(event.target.value)}
						placeholder="Enter Last Name"
					/>
					<input
						type="password"
						name="password"
						id="password"
						required
						value={password}
						onChange={(event) => setPassword(event.target.value)}
						placeholder="Enter Password"
					/>
					<button type="submit">Signup</button>
					<button onClick={handleSwitchToLogin}>Back to Login</button>
				</form>
				<div className="title-container">
					<Mediaphile />
				</div>
			</div>
		);
	}
	return (
		<div className="login-form">
			<h2>Login!</h2>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="email"
					id="email"
					required
					value={email}
					onChange={(event) => setEmail(event.target.value)}
					placeholder="Enter Email"
				/>
				<input
					type="password"
					name="password"
					id="password"
					required
					value={password}
					onChange={(event) => setPassword(event.target.value)}
					placeholder="Enter Password"
				/>
				<button type="submit">Login</button>
				<button onClick={handleSwitchToSignUp}>Sign up Instead</button>
				<button type="submit">Login</button>
			</form>
			<div className="title-container">
				<Mediaphile />
			</div>
		</div>
	);
};

export default LoginForm;
