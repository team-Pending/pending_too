// import { createContext, useContext, useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from './mutations';
import jwtDecode from 'jwt-decode';

// const AuthContext = createContext();

// const AuthProvider = (props) => {
//     const user = {
//         email: "",
//     };
//     return <AuthContext.Provider value={{ user }} {...props} />;
// };

// const useAuth = () => useContext(AuthContext);

// export { AuthProvider, useAuth };

// use this to decode a token and get the user's information out of it

const AuthProvider = (props) => {
	const { login } = useMutation(LOGIN_USER);
	const { user, setUser } = useState();
	const handleLogin = async ({ email, password }) => {
		const { data } = await login({
			variables: {
				email,
				password,
			},
		});
		const decoded = jwtDecode(data.login.token);
		const user = decoded.data;
		console.log(decoded);
	};
	return <AuthContext.Provider value={{ user, handleLogin }} {...props} />;
};

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

export default new Auth();
