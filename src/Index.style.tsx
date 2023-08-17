import { Box, styled, Typography } from '@mui/material';
import { CustomStepperEnum } from './enam';
const BGImageURL = 'https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero.jpg';
const BGImageStyle = 'https://img2.badfon.ru/original/1920x1080/0/b8/seryy-svetlyy-fon-tochki.jpg';

export const HeaderAppStyle = styled(Typography)(({ step }: { step: CustomStepperEnum }) => ({
  margin: '0',
  padding: '0',
}));

export const CircularStyle = styled(Box)(() => ({
  color: '#b5a13c',
  height: '100px',
  width: '100%',
  margin: '10px',
  marginTop: '30%',
}));

export const FormStyle = styled(Box)(() => ({
  margin: '10px',
  marginTop: '10px',
}));
