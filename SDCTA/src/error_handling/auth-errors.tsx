const signUpErrorHandler = async (error: Error) => {
    const errorMessage = error.message;


    if (errorMessage.includes("internal-error")) {
        
        return ("Internal error. Try again, and make sure you have typed a valid password.")

    }
    else if (errorMessage.includes("invalid-email")) {

        return ("The email is invalid. Try again with a valid email.")

    }
    else if (errorMessage.includes("weak-password")) {

        return ("The password is invalid. It should be at least 6 characters.");

    }
    else if (errorMessage.includes("email-already-in-use")) {

        return ("This email is already in use. Try signing in or using a different email.");
        
    }
    else {
        return (errorMessage);
    }
}

export {signUpErrorHandler}