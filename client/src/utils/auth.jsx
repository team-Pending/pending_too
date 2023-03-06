import { createContext, useContext, useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from './mutations';

const AuthContext = createContext();

const USER_STUBS = {
	SHAWN: {
		email: 'shawn@test.com',
	},
	NONE: null,
};

const AuthProvider = (props) => {
	const { login } = useMutation(LOGIN_USER);
	const { user, setUser } = useState(USER_STUBS.SHAWN);
	const handleLogin = async ({ email, password }) => {
		const { data } = await login({
			variables: {
				email,
				password,
			},
		});
		console.log(data);
	};
	return <AuthContext.Provider value={{ user, handleLogin }} {...props} />;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
