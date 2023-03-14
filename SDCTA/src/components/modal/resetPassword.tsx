import * as React from "react";
import { useState } from "react";
import "../auth/auth.css";
import {
  sendPasswordResetEmail,
} from "firebase/auth";

import { auth } from "../../firebase-config";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import { style, textStyle } from "./styleObjects/signupStyle";
import {
  exitButtonStyle,
  titleStyle,
  buttonStyle,
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
        setResetMessage("Reset email sent successfully to: " + resetEmail);
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
          <h1 className="signup-form-title">Forgot Password?</h1>

          <div className="signup-form">
            <div className="input-boxes"></div>
            <div className="input-boxes">
              <h3 className="textbox-label">Email</h3>
              <input
                  type="email"
                  className="text-input"
                  onChange={(event) => {
                    setResetEmail(event.target.value);
                  }}
              />
            </div>
            {resetMessage !== ""
              ? (
            <p>{resetMessage}</p>
                )
              : (
                  ""
                )}
          </div>
          <button onClick={sendReset} className="btn-signup">
            Request Password
          </button>
        </Box>
      </Modal>
    </div>
  );
};
