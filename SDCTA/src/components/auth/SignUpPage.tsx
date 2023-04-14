import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  getAuth,
  signInWithRedirect,
  getRedirectResult,
} from "firebase/auth";
import "./auth.css";
import { auth } from "../../firebase-config";
import { registerUser } from "../../api/auth";
import { signUpErrorHandler } from "../../error_handling/auth-errors";
import { useNavigate } from "react-router-dom";
import { login } from "../../slices/loginSlice";
import { useDispatch } from "react-redux";

export const SignUpPage: React.FC = () => {
  const [userDisplayName, setUserDisplayName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreedTerms, setAgreedTerms] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let [inputError, setInputError] = useState({
    unknownError: "",
    passwordError: "",
    confirmError: "",
    emailError: "",
    nameError: "",
  });

  const register = async (): Promise<void> => {
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

      if (!error) {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          registerEmail,
          registerPassword
        );

        await updateProfile(userCredential.user, {
          displayName: userDisplayName,
        });

        await registerUser(userCredential);

        dispatch(login());
        navigate("/");
      }
    } catch (error) {
      if (error instanceof Error) {
        const errorMessage = signUpErrorHandler(error);

        inputError = { ...inputError, ...errorMessage };
        setInputError({ ...inputError });
      }
    }
  };

  const provider = new GoogleAuthProvider();
  const auth_ = getAuth();

  const loginWithGoogle = async (): Promise<void> => {
    await signInWithRedirect(auth_, provider);
    await getRedirectResult(auth_)
      .then(async (result) => {
        if (result !== null) {
          // const credential = GoogleAuthProvider.credentialFromResult(result);
          // if (credential !== null) {
          //   const token = credential.accessToken;
          // }
          // const user = result.user;
          await registerUser(result);
          dispatch(login());
          navigate("/");
        }
      })
      .catch((error) => {
        console.error(error); /* ----- TEMPORARY ----- */

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

  return (
    <div>
      <h1 className="signup-form-title">Create Your Account</h1>

      <div className="signup-form">
        <div className="input-boxes">
          {/* Name input */}
          <h3 className="textbox-label">Full Name</h3>
          <input
            className={
              inputError.nameError === "" ? "text-input" : "text-input error"
            }
            type="fullname"
            onChange={(event) => {
              setUserDisplayName(event.target.value);
            }}
          />
          {inputError.nameError !== ""
            ? (
            <p className="error-message">{inputError.nameError}</p>
              )
            : (
                ""
              )}

          {/* Email input */}
          <h3 className="textbox-label">Email</h3>
          <input
            className={
              inputError.emailError === "" ? "text-input" : "text-input error"
            }
            type="email"
            onChange={(event) => {
              setRegisterEmail(event.target.value);
            }}
          />
          {inputError.emailError !== ""
            ? (
            <p className="error-message">{inputError.emailError}</p>
              )
            : (
                ""
              )}

          {/* Password input */}
          <h3 className="textbox-label">Password</h3>
          <input
            className={
              inputError.passwordError === ""
                ? "text-input"
                : "text-input error"
            }
            type="password"
            onChange={(event) => {
              setRegisterPassword(event.target.value);
            }}
          />
          {inputError.passwordError !== ""
            ? (
            <p className="error-message">{inputError.passwordError}</p>
              )
            : (
                ""
              )}

          {/* Confirm password */}
          <h3 className="textbox-label">Confirm Password</h3>
          <input
            className={
              inputError.confirmError === "" ? "text-input" : "text-input error"
            }
            type="password"
            onChange={(event) => {
              setConfirmPassword(event.target.value);
            }}
          />
          {inputError.confirmError !== ""
            ? (
            <p className="error-message">{inputError.confirmError}</p>
              )
            : (
                ""
              )}
        </div>

        <div className="terms">
          <input
            className="terms-checkbox"
            onChange={(event) => {
              setAgreedTerms(event.target.checked);
            }}
            type="checkbox"
          />

          <label className="terms-label">
            I agree to the <a href="/">Terms of Service</a> and{" "}
            <a href="/">Privacy Policy</a>
          </label>
        </div>

        {inputError.unknownError !== ""
          ? (
          <p className="error-message">{inputError.unknownError}</p>
            )
          : (
              ""
            )}

        <button onClick={register} className="btn-signup">
          Sign Up
        </button>

        <div className="separator">
          <div className="line"></div>
          <p className="or">&nbsp; or &nbsp;</p>
          <div className="line"></div>
        </div>

        <div>
          <button onClick={loginWithGoogle} className="btn google-signup">
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};
