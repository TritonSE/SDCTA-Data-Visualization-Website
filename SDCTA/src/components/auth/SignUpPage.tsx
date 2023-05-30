import { useState } from "react";
import "./auth.css";
import { useNavigate } from "react-router-dom";
import { selectSignUpError } from "../../slices/loginSlice";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../app/hooks";

export const SignUpPage: React.FC = () => {
  const [userDisplayName, setUserDisplayName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreedTerms, setAgreedTerms] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const inputError = useAppSelector(selectSignUpError);

  const callSignupWithGoogle = (): void => {
    dispatch({
      type: 'SIGNUP_GOOGLE_USER',
      payload: {
        navigate
      }
    });
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

        <button onClick={() => {
          dispatch({
            type: 'REGISTER_USER',
            payload: {
              userDisplayName,
              registerEmail,
              agreedTerms,
              registerPassword,
              confirmPassword,
              navigate
            }
          });
        }
        } className="btn-signup">
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
