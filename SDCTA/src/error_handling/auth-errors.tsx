const signUpErrorHandler = (error: Error) => {
  const errorMessage = error.message;

  if (errorMessage.includes("internal-error")) {
    return {
      unknownError:
        "Internal error. Make sure you have typed a valid password.",
    };
  } else if (errorMessage.includes("invalid-email")) {
    return {
      emailError: "The email is invalid. Try again with a valid email.",
    };
  } else if (errorMessage.includes("weak-password")) {
    return {
      passwordError:
        "The password is invalid. It should be at least 6 characters.",
    };
  } else if (errorMessage.includes("email-already-in-use")) {
    return {
      emailError:
        "This email is already in use. Try signing in or using a different email.",
    };
  } else {
    return { unknownError: errorMessage };
  }
};

const logInErrorHandler = (error: Error) => {
  const errorMessage = error.message;

  if (errorMessage.includes("user-not-found")) {
    return { emailError: "A user has not been found with this email." };
  } else if (errorMessage.includes("invalid-email")) {
    return {
      emailError: "The email is invalid. Try again with a valid email.",
    };
  } else if (errorMessage.includes("wrong-password")) {
    return { passwordError: "Wrong password." };
  } else if (errorMessage.includes("internal-error")) {
    return {
      unkownError: "Internal error. Make sure you have typed a valid password.",
    };
  } else {
    return { unknownError: errorMessage };
  }
};

export { signUpErrorHandler, logInErrorHandler };
