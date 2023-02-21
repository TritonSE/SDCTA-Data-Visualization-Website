const signUpErrorHandler = async (error: Error) => {
    const errorMessage = error.message;


    if (errorMessage.includes("internal-error")) {
        return ["unknown","Internal error. Make sure you have typed a valid password."]
    }
    else if (errorMessage.includes("invalid-email")) {

        return ["email","The email is invalid. Try again with a valid email."];

    }
    else if (errorMessage.includes("weak-password")) {

        return ["password","The password is invalid. It should be at least 6 characters."];

    }
    else if (errorMessage.includes("email-already-in-use")) {

        return ["email","This email is already in use. Try signing in or using a different email."];
        
    } 
    else if (errorMessage.includes("empty-name")) {
        return ["name","Please enter your full name."];
    }
    else if (errorMessage.includes("no-match")) {
        return ["confirmPassword","Passwords do not match."]
    } 
    else if (errorMessage.includes("no-terms")) {
        return ["unknown","Must agree to the terms and services to register."]
    }
    else {
        return ["unknown",errorMessage];
    }
}

const logInErrorHandler = async (error: Error) => {
    const errorMessage = error.message;

    if (errorMessage.includes("user-not-found")) {
        return ["email","A user has not been found with this email."]
    } 
    else if (errorMessage.includes("invalid-email")) {
        return ["email","The email is invalid. Try again with a valid email."];
    }
    else if (errorMessage.includes("wrong-password")) {
        return ["password","Wrong password."]
    }
    else if (errorMessage.includes("internal-error")) {
        return ["unknown","Internal error. Make sure you have typed a valid password."]
    }
    else {
        return ["unknown",errorMessage];
    }
}

export {signUpErrorHandler, logInErrorHandler}