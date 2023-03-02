import { useState,useEffect } from 'react';

// Need to import from where auth is verifying
import { onAuthStateChanged } from '';
import { auth } from '';

const useAuth = () => {
    const [currentUser, setCurrentUser] = useState({})

    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            if(user){
                setCurrentUser(user)
            } else {
                setCurrentUser(null)
            }
        });
    });

    return (
        currentUser
    );
};

export default useAuth;