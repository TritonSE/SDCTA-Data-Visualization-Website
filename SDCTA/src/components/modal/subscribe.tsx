import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import { style, textStyle } from "./styleObjects/subscribeStyle";
import {
  exitButtonStyle,
  titleStyle,
  buttonStyle,
} from "./styleObjects/modals";

interface ModalProps {
  show: boolean;
  setShow: (show: boolean) => void;
}

export const SubscribeModal: React.FC<ModalProps> = (props: ModalProps) => {
  const handleOpen = (): void => {
    props.setShow(true);
  };
  const handleClose = (): void => {
    props.setShow(false);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
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
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={titleStyle}
          >
            Get unlimited access!
          </Typography>
          <Typography id="modal-modal-description" sx={textStyle}>
            This data visualization can only be viewed by members with paid
            subscriptions. Subscribe to get exclusive access to statistical
            documents, resources, and data visualizations!
          </Typography>
          <Button variant="contained" disableElevation sx={buttonStyle}>
            Subscribe Today!
          </Button>
        </Box>
      </Modal>
    </div>
  );
};
