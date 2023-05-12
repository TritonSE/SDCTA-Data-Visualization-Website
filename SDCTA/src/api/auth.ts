import type { UserCredential } from "firebase/auth";
import {
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence,
  updateProfile,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  getAuth,
  signInWithRedirect,
  getRedirectResult,
} from "firebase/auth";
import { redirect } from "react-router-dom";
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
  userCredential: UserCredential
): Promise<Response> => {
  console.log(userCredential);
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

const provider = new GoogleAuthProvider();
const auth_ = getAuth();
// const dispatch = useDispatch();

const signupWithGoogle = async (): Promise<void> => {
  await signInWithRedirect(auth_, provider);
  await getRedirectResult(auth_)
    .then(async (result) => {
      if (result !== null) {
        // await registerUser(result);
        await registerUser(result).then((response) => {
        }).catch((error) => {
          throw error;
        })
        // dispatch(login());
      }
    })
    .catch((error: Error) => {
      console.error(error);
      throw error;

      // const errorCode = error.code;
      // const errorMessage = error.message;
      // // The email of the user's account used.
      // const email = error.customData.email;
      // // The AuthCredential type that was used.
      // const credential = GoogleAuthProvider.credentialFromError(error);
      /*
       *
       *
       * REDIRECT MODE
       * This error is handled in a similar way in the redirect mode, with the difference
       * that the pending credential has to be cached between page redirects (for example,
       * using session storage).
       *
       */
      // User's email already exists.
      // if (error.code === 'auth/account-exists-with-different-credential') {
      //   // The pending Google credential.
      //   var pendingCred = error.credential;
      //   // The provider account's email address.
      //   var email = error.email;
      //   // Get sign-in methods for this email.
      //   auth_.fetchSignInMethodsForEmail(email).then(function(methods) {
      //     // If the user has several sign-in methods,
      //     // the first method in the list will be the "recommended" method to use.
      //     if (methods[0] === 'password') {
      //       // Asks the user their password.
      //       // TODO: handle this asynchronously.
      //       var password = promptUserForPassword(); // TODO: implement promptUserForPassword.
      //       auth_.signInWithEmailAndPassword(email, password).then(function(result) {
      //         return result.user.linkWithCredential(pendingCred);
      //       }).then(function() {
      //         // Google account successfully linked to the existing Firebase user.
      //         // goToApp();
      //         navigate("/");
      //       });
      //       return;
      //     }
      //     // All the other cases are external providers.
      //     // Construct provider object for that provider.
      //     // TODO: implement getProviderForProviderId.
      //     var provider = getProviderForProviderId(methods[0]);
      //     // At this point, you should let the user know that they already have an account
      //     // but with a different provider, and let them validate the fact they want to
      //     // sign in with this provider.
      //     // Sign in to provider. Note: browsers usually block popup triggered asynchronously,
      //     // so in real scenario you should ask the user to click on a "continue" button
      //     // that will trigger the signInWithPopup.
      //     auth_.signInWithPopup(provider).then(function(result) {
      //       // Remember that the user may have signed in with an account that has a different email
      //       // address than the first one. This can happen as Firebase doesn't control the provider's
      //       // sign in flow and the user is free to login using whichever account they own.
      //       // Link to Google credential.
      //       // As we have access to the pending credential, we can directly call the link method.
      //       result.user.linkAndRetrieveDataWithCredential(pendingCred).then(function(usercred) {
      //         // Google account successfully linked to the existing Firebase user.
      //         // goToApp();
      //         navigate("/");
      //       });
      //     });
      //   });
      // }
    }); // end of catch
};

const loginWithGoogle = async (): Promise<void> => {
  await signInWithRedirect(auth_, provider);
  await getRedirectResult(auth_)
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
