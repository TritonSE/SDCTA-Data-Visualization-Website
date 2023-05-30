import type { UserCredential } from "firebase/auth";
import {
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence,
  updateProfile,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithRedirect,
  signInWithPopup,
  getRedirectResult
} from "firebase/auth";
// import { useDispatch } from "react-redux";

import { auth } from "../firebase-config";

const register = async (
  userDisplayName: string,
  registerEmail: string,
  agreedTerms: boolean,
  registerPassword: string,
  confirmPassword: string,): Promise<void> => {
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

  await registerUser(userCredential).then((response) => {
  }).catch((error) => {
    throw error;
  })
};

const registerUser = async (
  userCredential: UserCredential | null
): Promise<Response> => {
  if (userCredential == null) {
    throw new Error("firebase failed");
  }

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
};

const getUser = async (
  email: any
): Promise<any> => {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  };

  const requestLink = "http://localhost:3001/user/"
  return await fetch(
    requestLink.concat(email),
    requestOptions
  ).then((result) => {
    return result;
  });
}

const provider = new GoogleAuthProvider();

const signupWithGoogle = async (): Promise<string> => {
  const userCredential = await signInWithPopup(auth, provider);
  const user = await getUser(userCredential.user.email);
  console.log(user);
  if (user == null) {
    await registerUser(userCredential);
    return "new user";
  }
  return "existing user";
}

const loginWithGoogle = async (): Promise<void> => {
  await signInWithRedirect(auth, provider);
  await getRedirectResult(auth)
    .then((result) => {
      if (result !== null) {
        // dispatch(login());
      }
    })
    .catch((error: Error) => {
      console.error(error);
      throw error;
    });
};

export { register, registerUser, getUser, loginUser, signupWithGoogle, loginWithGoogle };
