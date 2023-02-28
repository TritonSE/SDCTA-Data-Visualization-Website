import { UserCredential } from 'firebase/auth';
import React from 'react';

const registerUser = async (userCredential: UserCredential) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            username: userCredential.user.displayName,
            email: userCredential.user.email,
            tier: 1
        })
    };
    const response = await fetch('http://localhost:3001/api/user/create', requestOptions);
}

export {registerUser}