import { createContext, useContext, useState, useEffect } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import jwtDecode from 'jwt-decode';
import { LOGIN, ADD_USER } from './mutations';
import { QUERY_ME } from './queries';
const AuthContext = createContext();

const setStoredJwtToken = (token) => sessionStorage.setItem('jwt', token);
const getStoredJwtToken = () => sessionStorage.getItem('jwt');
const removeStoredJwtToken = () => sessionStorage.removeItem('jwt');
// use this to decode a token and get the user's information out of it
const getTokenUser = (token) => {
	const { data } = jwtDecode(token);
	console.log(data);
	return data;
};

const AuthProvider = (props) => {
	const [login] = useMutation(LOGIN);
	const [addUser] = useMutation(ADD_USER);
	const [error, setError] = useState();
	const [token, setToken] = useState();

	const payload = token ? getTokenUser(token) : null;
	useEffect(() => {
		setToken(getStoredJwtToken());
	}, []);
	const { data: userData } = useQuery(QUERY_ME);
	console.log(userData, 'userdata');
	const user = userData?.me;
	
	const handleLogin = async ({ email, password }) => {
		try {
			const { data } = await login({
				variables: {
					email,
					password,
				},
			});
			const token = data.login.token;
			setToken(token);
			setStoredJwtToken(token);
		} catch ({ message = 'An unexpected error occured' }) {
			setError(message);
		}
	};

	const handleSignup = async ({ username, firstName, lastName, email, password }) => {
		try {
			console.log('hello');
			const { data } = await addUser({
				variables: {
					username,
					firstName,
					lastName,
					email,
					password,
				},
			});
			console.log('hello2');
			const token = data.login.token;
			setToken(token);
			setStoredJwtToken(token);
			console.log(user);
		} catch ({ message = 'An unexpected error occured' }) {
			setError(message);
		}
	};

	const handleLogout = () => {
		setToken();
		removeStoredJwtToken();
	};

	return (
		<AuthContext.Provider
			value={{ payload, handleLogin, handleLogout, handleSignup, error, user}}
			{...props}
		/>
	);
};

const useAuth = () => useContext(AuthContext);

// create a new class to instantiate for a user
class Auth {
	// get user data
	getProfile() {
		return decode(this.getToken());
	}

	// check if user's logged in
	loggedIn() {
		// Checks if there is a saved token and it's still valid
		const token = this.getToken();
		return !!token && !this.isTokenExpired(token); // handwaiving here
	}

	// check if token is expired
	isTokenExpired(token) {
		try {
			const decoded = decode(token);
			if (decoded.exp < Date.now() / 1000) {
				return true;
			} else return false;
		} catch (err) {
			return false;
		}
	}

	getToken() {
		// Retrieves the user token from localStorage
		return localStorage.getItem('id_token');
	}

	login(idToken) {
		// Saves user token to localStorage
		localStorage.setItem('id_token', idToken);
		window.location.assign('/');
	}

	logout() {
		// Clear user token and profile data from localStorage
		localStorage.removeItem('id_token');
		// this will reload the page and reset the state of the application
		window.location.assign('/');
	}
}

export { AuthProvider, useAuth, Auth };
