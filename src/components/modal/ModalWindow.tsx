import React from 'react';
import { Modal } from '@mui/material';
import { ButtonElement } from '../button/ButtonElement';
import { WindowForButtonStyle, WindowModalStyle } from './ModalWindow.style';
import { useNavigate } from 'react-router-dom';
import Forms from '../Forms';
import { CustomButtonTextEnum, CustomTextEnum } from '../../enam';

export const ModalWindow = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();

  const handleChangeStepMinus = () => {
    navigate('/');
  };

  return (
    <>
      <WindowForButtonStyle>
        <ButtonElement text={CustomTextEnum.openModal} handleClick={handleOpen} variant="contained" />
        <ButtonElement
          text={CustomButtonTextEnum.titlePrev}
          handleClick={handleChangeStepMinus}
          variant="contained"
        />
      </WindowForButtonStyle>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <WindowModalStyle>
          <Forms />
        </WindowModalStyle>
      </Modal>
    </>
  );
};

export default ModalWindow;
