import { useState } from "react";

import "./auth.css";
import { useNavigate } from "react-router-dom";
import { ResetPasswordModal } from "../modal/resetPassword";

import { useDispatch } from "react-redux";

export const LogInPage: React.FC = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [rememberUser, setRememberUser] = useState(false);
  const [showResetModal, setShowResetModal] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [inputError, setInputError] = useState({
    emailError: "",
    passwordError: "",
    unknownError: "",
  });

  const callLoginUser = (): void => {
    dispatch({
      type: 'LOGIN_USER',
      payload: {
        loginPassword,
        rememberUser,
        loginEmail
      }
    });
    navigate("/");
  };

  const callLoginWithGoogle = (): void => {
    dispatch({
      type: 'LOGIN_GOOGLE_USER',
    });
    navigate("/");
  };

  return (
    <div>
      <h1 className="signup-form-title">Welcome Back</h1>

      <div className="signup-form">
        <div className="input-boxes">
          <h3 className="textbox-label">Email</h3>
          <input
            type="email"
            className={
              inputError.emailError === "" ? "text-input" : "text-input error"
            }
            onChange={(event) => {
              setLoginEmail(event.target.value);
            }}
          />
          {inputError.emailError !== "" ? (
            <p className="error-message">{inputError.emailError}</p>
          ) : (
            ""
          )}

          <h3 className="textbox-label">Password</h3>
          <input
            type="password"
            className={
              inputError.passwordError === ""
                ? "text-input"
                : "text-input error"
            }
            onChange={(event) => {
              setLoginPassword(event.target.value);
            }}
          />

          {inputError.passwordError !== "" ? (
            <p className="error-message">{inputError.passwordError}</p>
          ) : (
            ""
          )}
        </div>
        <div className="terms">
          <input
            className="terms-checkbox"
            onChange={(event) => {
              setRememberUser(event.target.checked);
            }}
            type="checkbox"
          />

          <label className="terms-label">Remember me?</label>
        </div>

        {inputError.unknownError !== "" ? (
          <p className="error-message">{inputError.unknownError}</p>
        ) : (
          ""
        )}

        <button
          onClick={async () => {
            callLoginUser();
          }}
          className="btn-signup"
        >
          Login
        </button>

        <div className="separator">
          <div className="line"></div>
          <p className="or">&nbsp; or &nbsp;</p>
          <div className="line"></div>
        </div>

        <div>
          <button onClick={callLoginWithGoogle} className="btn google-signup">
            <div className="google-logo"></div>
            <p className="google-text">Log in with Google</p>
          </button>
        </div>

        <ResetPasswordModal
          show={showResetModal}
          setShow={(showChange) => {
            setShowResetModal(showChange);
          }}
        />
        <div className="bottom-text">
          <p
            className="clickable-text"
            onClick={() => {
              setShowResetModal(true);
            }}
          >
            Forgot your password?
          </p>

          <p className="signup-link-text">
            Don&apos;t have an account?
            <a
              className="clickable-text"
              onClick={() => {
                navigate("/Signup");
              }}
            >
              {" "}
              Sign up for free
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
