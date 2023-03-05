import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

const USER_STUBS = {
	SHAWN: {
		email: 'shawn@test.com',
	},
	NONE: null,
};

const AuthProvider = (props) => {
	const { user, setUser } = useState(USER_STUBS.SHAWN);
	const handleLogin = ({ email }) => {
		setUser({ email });
	};
	return <AuthContext.Provider value={{ user, handleLogin }} {...props} />;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
