import type { UserCredential } from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  setPersistence,
  browserSessionPersistence,
  deleteUser
} from "firebase/auth";
import { auth } from "../firebase-config";
import { signUpErrorHandler } from "../error_handling/auth-errors";

interface InputError {
  emailError: string;
  passwordError: string;
  unknownError: string;
  confirmError: string;
  nameError: string;
}

const registerUser = async (
  userCredential: UserCredential
): Promise<Response> => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: userCredential.user.displayName,
      email: userCredential.user.email,
      tier: 1,
    }),
  };
  const response = await fetch(
    "http://localhost:3001/user/",
    requestOptions
  );
  return response;
};

const register = async (
  inputError: InputError,
  setInputError: (a: InputError) => void,
  confirmPassword: string,
  registerPassword: string,
  registerEmail: string,
  userDisplayName: string,
  agreedTerms: boolean
): Promise<void> => {
  try {
    inputError.unknownError = "";
    inputError.passwordError = "";
    inputError.confirmError = "";
    inputError.emailError = "";
    inputError.nameError = "";

    let error = false;
    // make sure passwords match.
    if (!(confirmPassword === registerPassword)) {
      inputError.confirmError = "Passwords do not match.";
      error = true;
    }

    if (userDisplayName === "") {
      inputError.nameError = "Please enter your full name.";
      error = true;
    }

    if (!agreedTerms) {
      inputError.unknownError =
        "Must agree to the terms and services to register.";
      error = true;
    }

    setInputError({
      ...inputError,
    });

    if (error) {
      return;
    }

    const userCredential = await createUserWithEmailAndPassword(
      auth,
      registerEmail,
      registerPassword
    );

    setPersistence(auth, browserSessionPersistence).then(async () => {
    }).catch((error: Error) => {
      const errorMessage = error.message;
      setInputError({ ...inputError, unknownError: errorMessage });
    });

    await updateProfile(userCredential.user, {
      displayName: userDisplayName,
    });

    const response = await registerUser(userCredential);

    if (response.status === 400) {
      if (auth.currentUser != null) {
        deleteUser(auth.currentUser).then(() => {
          setInputError({ ...inputError, unknownError: response.statusText });
        }).catch((error) => {
          setInputError({ ...inputError, unknownError: error });
        });
        return;
      }
    }
  } catch (error) {
    if (error instanceof Error) {
      const errorMessage = signUpErrorHandler(error);
      inputError = { ...inputError, ...errorMessage };
      setInputError({ ...inputError });
    }
  }
};

export { registerUser };
