import { styled, Typography } from '@mui/material';

export const WindowModalStyle = styled(Typography)(() => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '400px',
  backgroundColor: 'background.paper',
  border: '2px solid #000',
}));
