import { Box, styled, Typography } from '@mui/material';
import { CustomStepperEnum } from './enam';
const BGImageURL = 'https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero.jpg';
const BGImageStyle = 'https://i.redd.it/lhf3ad7hrxsy.png';

export const HeaderAppStyle = styled(Typography)(({ step }: { step: CustomStepperEnum }) => ({
  margin: '0',
  padding: '0',
  height: '100vh',
  opacity: '0.9',
  backgroundImage: !step ? `url(${BGImageStyle})` : `url(${BGImageURL})`,
  backgroundSize: 'cover',
  overflow: 'hidden',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
}));

export const CircularStyle = styled(Box)(() => ({
  color: '#b5a13c',
  height: '100px',
  width: '100%',
  margin: '10px',
  marginTop: '30%',
}));
