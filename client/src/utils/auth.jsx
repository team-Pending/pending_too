import { createContext, useContext } from "react";

const AuthContext = createContext();

const AuthProvider = (props) => {
    const user = {
        email: "",
    };
    return <AuthContext.Provider value={{ user }} {...props} />;
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };