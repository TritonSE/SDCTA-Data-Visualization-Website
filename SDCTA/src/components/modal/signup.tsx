import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import {style, textStyle} from './styleObjects/signupStyle';
import {exitButtonStyle, titleStyle, buttonStyle} from './styleObjects/modals';

interface ModalType {
  show: boolean;
  setShow: (show: boolean) => void;
}

export default function SignupModal(props: ModalType) {
  const handleOpen = () => props.setShow(true);
  const handleClose = () => props.setShow(false);

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
          <IconButton aria-label="delete" onClick={handleClose} sx={exitButtonStyle}>
            <CloseIcon />
          </IconButton>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={titleStyle}>
            Become a member now!
          </Typography>
          <Typography id="modal-modal-description" sx={textStyle}>
            Create an account and subscribe to get exclusive access to
            statistical documents, resources, and data visualizations!
          </Typography>
          <Button variant="contained" disableElevation sx={buttonStyle}>
            Sign Up Today!
          </Button>
        </Box>
      </Modal>
    </div>
  );
}