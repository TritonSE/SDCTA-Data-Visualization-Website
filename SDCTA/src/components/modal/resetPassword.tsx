import * as React from "react";
import { useState } from "react";
import "../auth/auth.css";
import "./styleObjects/resetPassword.css";
import {
  sendPasswordResetEmail,
} from "firebase/auth";

import { auth } from "../../firebase-config";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import { style } from "./styleObjects/signupStyle";
import {
  exitButtonStyle
} from "./styleObjects/modals";

interface ModalProps {
  show: boolean;
  setShow: (show: boolean) => void;
}

export const ResetPasswordModal: React.FC<ModalProps> = (props: ModalProps) => {
  const [resetMessage, setResetMessage] = useState("");
  const [resetEmail, setResetEmail] = useState("");

  const handleClose = (): void => {
    props.setShow(false);
  };

  const sendReset = (): void => {
    sendPasswordResetEmail(auth, resetEmail)
      .then((): void => {
        setResetMessage("Success");
      })
      .catch((error: Error): void => {
        const errorMessage = error.message;
        if (errorMessage.includes("invalid-email")) {
          setResetMessage("The email is invalid. Type a valid email.");
        }
        if (errorMessage.includes("user-not-found")) {
          setResetMessage("This email is not associated with a user. Sign up with this email or try another.");
        }
      });
  };

  return (
    <div>
      <Modal
        open={props.show}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <IconButton
            aria-label="delete"
            onClick={handleClose}
            sx={exitButtonStyle}
          >
            <CloseIcon />
          </IconButton>
          {resetMessage !== "Success"
            ? <h1 className="reset-title">Forgot Password?</h1>
            : <h1 className="reset-title">Email Successfully Sent!</h1>
          }

          <div className="signup-form reset-form">
            <div className="input-boxes">
              {resetMessage !== "Success"
                ? <h3 className="reset-desc">
                    Please enter your email below, and you will be
                    emailed a link on how to reset your password.
                  </h3>
                : <h3 className="reset-desc">
                  An email has been sent to your inbox - Follow the instructions on how to reset your password.
                  <br />
                  <br />
                  If you don&apos;t receive the email within 5 minutes, you can request to reset your password again by clicking the button below!
                </h3>
              }

              {resetMessage !== "Success"
                ? <div>
                  <h3 className="textbox-label">Email</h3>
                  <input
                      type="email"
                      className={
                        resetMessage === "" || resetMessage === "Success" ? "text-input" : "text-input error"
                      }
                      onChange={(event) => {
                        setResetEmail(event.target.value);
                      }}
                  />
                  {resetMessage !== "" && resetMessage !== "Success"
                    ? (
                      <p className="reset-error">{resetMessage}</p>
                      )
                    : (
                        ""
                      )}
                  <button onClick={sendReset} className="btn-signup">
                    Request Password
                  </button>
                </div>
                : <button onClick={sendReset} className="btn-signup">
                    Request Password Again
                </button>
              }
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
