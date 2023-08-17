import { styled, Typography } from '@mui/material';

export const WindowModalStyle = styled(Typography)(() => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  height: '30vh',
  backgroundColor: '#edeaf2',
  border: '2px solid #000',
}));
