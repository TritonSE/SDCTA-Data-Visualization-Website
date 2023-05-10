import type { UserCredential } from "firebase/auth";
import {
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence,
} from "firebase/auth";

import { auth } from "../firebase-config";

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
    if (loginPassword === "") {
      // inputError.passwordError = "Type in a password.";
      // setInputError({ ...inputError });
      throw Error("Type in a password.");
    }
    console.log("sign in");
    await signInWithEmailAndPassword(auth, loginEmail, loginPassword);

    if (rememberUser) {
      setPersistence(auth, browserLocalPersistence)
        .then(async () => {})
        .catch((error: Error) => {
          throw error;
        });
    } else {
      setPersistence(auth, browserSessionPersistence)
        .then(async () => {})
        .catch((error: Error) => {
          throw error;
        });
    }
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
  }
};

const getUser = async (
  email: any
): Promise<Response> => {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  };

  const requestLink = "http://localhost:3001/user/"
  const response = await fetch(
    requestLink.concat(email),
    requestOptions
  );
  return await response.json();
}

export { registerUser, getUser, loginUser };
