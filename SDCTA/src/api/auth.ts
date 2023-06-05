import type { UserCredential } from "firebase/auth";
import {
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence,
  updateProfile,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { auth } from "../firebase-config";

export interface GoogleLogInReturn {
  type: string;
  email: string;
}

const register = async (
  userDisplayName: string,
  registerEmail: string,
  agreedTerms: boolean,
  registerPassword: string,
  confirmPassword: string
): Promise<void> => {
  // make sure passwords match.
  if (!(confirmPassword === registerPassword)) {
    throw Error("Passwords do not match.");
  }

  if (userDisplayName === "") {
    throw Error("Please enter your full name.");
  }

  if (!agreedTerms) {
    throw Error("Must agree to the terms and services to register.");
  }

  const userCredential = await createUserWithEmailAndPassword(
    auth,
    registerEmail,
    registerPassword
  );

  await setPersistence(auth, browserSessionPersistence);

  await updateProfile(userCredential.user, {
    displayName: userDisplayName,
  });

  await registerUser(userCredential)
    .then((response) => {})
    .catch((error) => {
      throw error;
    });
};

const registerUser = async (
  userCredential: UserCredential | null
): Promise<Response> => {
  if (userCredential == null) {
    throw new Error("firebase failed");
  }
  let firstName = "";
  let lastName = "";
  const displayName = userCredential.user.displayName;
  if (displayName != null) {
    if (displayName.includes(" ")) {
      firstName = displayName.substring(0, displayName.indexOf(" "));
      lastName = displayName.substring(displayName.indexOf(" ") + 1);
    } else {
      firstName = displayName;
    }
  }
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      firstName,
      lastName,
      email: userCredential.user.email,
    }),
  };
  const response = await fetch("http://localhost:3001/user/", requestOptions);
  return response;
};

const loginUser = async (
  loginPassword: string,
  rememberUser: boolean,
  loginEmail: string
): Promise<void> => {
  if (loginPassword === "") {
    // inputError.passwordError = "Type in a password.";
    // setInputError({ ...inputError });
    throw Error("Type in a password.");
  }

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
};

const getUser = async (email: any): Promise<any> => {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  const requestLink = "http://localhost:3001/user/";
  const response = await fetch(requestLink.concat(email), requestOptions);
  if (response.status === 404) {
    return null;
  }
  return await response.json();
};

const provider = new GoogleAuthProvider();

const signupWithGoogle = async (): Promise<GoogleLogInReturn> => {
  const userCredential = await signInWithPopup(auth, provider);
  if (userCredential.user.email == null) {
    throw new Error("Firebase failed");
  }
  const user = await getUser(userCredential.user.email);

  if (user === null) {
    await registerUser(userCredential);
    return { type: "new user", email: userCredential.user.email };
  }
  return { type: "existing user", email: userCredential.user.email };
};

export { register, registerUser, getUser, loginUser, signupWithGoogle };
