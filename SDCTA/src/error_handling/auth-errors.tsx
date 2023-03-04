interface inputError {
  emailError: string;
  passwordError: string;
  unknownError: string;
}

const defaultError = {
  emailError: "",
  passwordError: "",
  unknownError: ""
}

const signUpErrorHandler = (error: Error): inputError => {
  const errorMessage = error.message;

  if (errorMessage.includes("internal-error")) {
    return {
      ...defaultError,
      unknownError:
        "Internal error. Make sure you have typed a valid password.",
    };
  } else if (errorMessage.includes("invalid-email")) {
    return {
      ...defaultError,
      emailError: "The email is invalid. Try again with a valid email.",
    };
  } else if (errorMessage.includes("weak-password")) {
    return {
      ...defaultError,
      passwordError:
        "The password is invalid. It should be at least 6 characters.",
    };
  } else if (errorMessage.includes("email-already-in-use")) {
    return {
      ...defaultError,
      emailError:
        "This email is already in use. Try signing in or using a different email.",
    };
  } else {
    return {
      ...defaultError,
      unknownError: errorMessage
    };
  }
};

const logInErrorHandler = (error: Error): inputError => {
  const errorMessage = error.message;

  if (errorMessage.includes("user-not-found")) {
    return {
      ...defaultError,
      emailError: "A user has not been found with this email."
    };
  } else if (errorMessage.includes("invalid-email")) {
    return {
      ...defaultError,
      emailError: "The email is invalid. Try again with a valid email.",
    };
  } else if (errorMessage.includes("wrong-password")) {
    return {
      ...defaultError,
      passwordError: "Wrong password."
    };
  } else if (errorMessage.includes("internal-error")) {
    return {
      ...defaultError,
      unknownError: "Internal error. Make sure you have typed a valid password."
    };
  } else {
    return {
      ...defaultError,
      unknownError: errorMessage
    };
  }
};

export { signUpErrorHandler, logInErrorHandler };
