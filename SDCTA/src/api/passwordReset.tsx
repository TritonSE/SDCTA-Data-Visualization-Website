import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import React from "react";

const resetPassword = (email: string) => {
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
    .then(() => {
        // Password reset email sent!
        // ..
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
    });
}

export {resetPassword}
