import React from 'react';
import { Box, Button, Modal, Typography } from '@mui/material';
import { ButtonElement } from '../button/ButtonElement';
import { WindowModalStyle } from './ModalWindow.style';

export const ModalWindow = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <ButtonElement text="Open modal" handleClick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <WindowModalStyle>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </WindowModalStyle>
      </Modal>
    </>
  );
};

export default ModalWindow;
