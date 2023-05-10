import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  setPersistence,
  browserSessionPersistence,
  deleteUser,
} from "firebase/auth";
import "./auth.css";
import { auth } from "../../firebase-config";
import { registerUser } from "../../api/auth";
import { signUpErrorHandler } from "../../error_handling/auth-errors";
import { useNavigate } from "react-router-dom";
import { logout } from "../../slices/loginSlice";
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

      if (error) {
        return;
      }

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );

      setPersistence(auth, browserSessionPersistence)
        .then(async () => {})
        .catch((error: Error) => {
          const errorMessage = error.message;
          setInputError({ ...inputError, unknownError: errorMessage });
        });

      await updateProfile(userCredential.user, {
        displayName: userDisplayName,
      });

      await registerUser(userCredential).then((response) => {
        navigate("/signupdetails");
      }).catch((error) => {
        if (auth.currentUser != null) {
          deleteUser(auth.currentUser)
            .then(() => {
              setInputError({
                ...inputError,
                unknownError: error.message,
              });
            })
            .catch((error) => {
              setInputError({ ...inputError, unknownError: error });
            });
        }
      })
    } catch (error) {
      if (error instanceof Error) {
        if (auth.currentUser != null) {
          deleteUser(auth.currentUser)
            .then(() => {
              dispatch(logout());
              navigate("/signup");
            })
            .catch((error) => {
              setInputError({ ...inputError, unknownError: error });
            });
        }
        const errorMessage = signUpErrorHandler(error);
        inputError = { ...inputError, ...errorMessage };
        setInputError({ ...inputError });
      }
    }
  };


  const callSignupWithGoogle = (): void => {
    dispatch({
      type: 'SIGNUP_GOOGLE_USER',
    });
    navigate("/");
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
          {inputError.nameError !== "" ? (
            <p className="error-message">{inputError.nameError}</p>
          ) : (
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
          {inputError.emailError !== "" ? (
            <p className="error-message">{inputError.emailError}</p>
          ) : (
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
          {inputError.passwordError !== "" ? (
            <p className="error-message">{inputError.passwordError}</p>
          ) : (
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
          {inputError.confirmError !== "" ? (
            <p className="error-message">{inputError.confirmError}</p>
          ) : (
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

        {inputError.unknownError !== "" ? (
          <p className="error-message">{inputError.unknownError}</p>
        ) : (
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
          <button onClick={callSignupWithGoogle} className="btn google-signup">
            <div className="google-logo"></div>
            <p className="google-text">Sign in with Google</p>
          </button>
        </div>
      </div>
    </div>
  );
};
