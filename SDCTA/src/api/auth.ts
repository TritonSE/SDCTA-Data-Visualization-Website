import type { UserCredential } from "firebase/auth";
import {
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence,
} from "firebase/auth";

import { auth } from "../firebase-config";
import { logInErrorHandler } from "../error_handling/auth-errors";

const registerUser = async (
  userCredential: UserCredential
): Promise<Response> => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: userCredential.user.displayName,
      email: userCredential.user.email,
      tierLevel: 1,
    }),
  };
  const response = await fetch("http://localhost:3001/user/", requestOptions);
  return response;
};

const loginUser = async (
  loginPassword: string,
  rememberUser: boolean,
  loginEmail: string): Promise<void> => {
  console.log("made it");
  try {
    // inputError = {
    //   emailError: "",
    //   passwordError: "",
    //   unknownError: "",
    // };

    // setInputError({
    //   emailError: "",
    //   passwordError: "",
    //   unknownError: "",
    // });
    console.log("sign in");
    if (loginPassword === "") {
      // inputError.passwordError = "Type in a password.";
      // setInputError({ ...inputError });
      return;
    }
    console.log("sign in");
    await signInWithEmailAndPassword(auth, loginEmail, loginPassword);

    if (rememberUser) {
      setPersistence(auth, browserLocalPersistence)
        .then(async () => {})
        .catch((error: Error) => {
          const errorMessage = error.message;
          // setInputError({ ...inputError, unknownError: errorMessage });
        });
    } else {
      setPersistence(auth, browserSessionPersistence)
        .then(async () => {})
        .catch((error: Error) => {
          const errorMessage = error.message;
          // setInputError({ ...inputError, unknownError: errorMessage });
        });
    }

  } catch (error) {
    if (error instanceof Error) {
      const errorMessage = logInErrorHandler(error);

      // inputError = { ...inputError, ...errorMessage };
      // setInputError({ ...inputError });
    }
  }
};

export { registerUser, loginUser };
