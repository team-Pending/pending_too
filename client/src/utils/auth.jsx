import { createContext, useContext, useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from './mutations';
import jwtDecode from 'jwt-decode';

const AuthContext = createContext();

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

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
