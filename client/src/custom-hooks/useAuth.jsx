// import { useState,useEffect } from 'react';
// import jwt_decode from 'jwt-decode';
// Need to import from where auth is verifying
// import { onAuthStateChanged } from '';
// import { auth } from '../utils/';

// const useAuth = () => {
//     const [currentUser, setCurrentUser] = useState({})

//     useEffect(()=>{
//         onAuthStateChanged(auth, (user)=>{
//             if(user){
//                 setCurrentUser(user)
//             } else {
//                 setCurrentUser(null)
//             }
//         });
//     });

//     return (
//         currentUser
//     );
// };

// export default useAuth;

// Trial for a hook to grab auth data needed for Admin page inserted by Laura
import React, { createContext, useState, useEffect, useContext } from 'react';
import jwt_decode from 'jwt-decode';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [authData, setAuthData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      const decodedToken = jwt_decode(token);

      if (decodedToken.exp * 1000 < Date.now()) {
        // token has expired, remove it from local storage
        localStorage.removeItem('token');
      } else {
        // token is still valid, set the auth data in state
        setAuthData(decodedToken);
      }
    }
  }, []);

  const hasAccess = (permission) => {
    if (authData && authData.permissions) {
      return authData.permissions.includes(permission);
    }
    return false;
  }

  return (
    <AuthContext.Provider value={{ authData, hasAccess }}>
      {children}
    </AuthContext.Provider>
  )
}

export default { AuthProvider, useAuth };