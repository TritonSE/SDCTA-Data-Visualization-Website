import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

const exitButtonStyle = {
  position: 'absolute' as 'absolute',
  top: '5px',
  right: '5px',
}

const titleStyle = {
  // position: '',
}

const textStyle = {
  // position: 'absolute' as 'absolute',
  mt: 2
}

const buttonStyle = {
  width: "80%"
}

export default function SubscribeModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <IconButton aria-label="delete" onClick={handleClose} sx={exitButtonStyle}>
            <CloseIcon />
          </IconButton>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={titleStyle}>
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
}