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
  const [resetMessage, setResetMessage] = useState("Success");
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
        setResetMessage(
          `${errorMessage} (Try again, make sure to type email in email box)`
        );
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
                  If you don’t receive the email within 5 minutes, reload the page
                  and re-request a password reset.
                </h3>
              }

              {resetMessage !== "Success" &&
                <div>
                  <h3 className="textbox-label">Email</h3>
                  <input
                      type="email"
                      className="text-input"
                      onChange={(event) => {
                        setResetEmail(event.target.value);
                      }}
                  />
                  {resetMessage !== ""
                    ? (
                      <p>{resetMessage}</p>
                      )
                    : (
                        ""
                      )}
                  <button onClick={sendReset} className="btn-signup">
                    Request Password
                  </button>
                </div>
              }
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
