import './Index.style';
import { HeaderAppStyle } from './Index.style';
import AddPage from './components/AddPage';
import AdditionalInfo from './components/AdditionalInfo';
import { CustomButtonTextEnum } from './enam';
import { useDispatch, useSelector } from 'react-redux';
import { AccountPagesState } from './types';
import { ButtonElement } from './components/button/ButtonElement';
import { useNavigate } from 'react-router-dom';
import { addSteper } from './store/globalSlice';
import { useCallback } from 'react';

export const App = () => {
  const stepper = useSelector((state: AccountPagesState | any) => state.globalState.count);
  const dispatch = useDispatch();
  console.log('this is stepper', stepper);

  const navigate = useNavigate();

  const handleCall = useCallback(() => {
    //@ts-ignore
    dispatch(addSteper(stepper + 1));
    navigate('/add');
  }, [stepper]);

  return (
    <>
      <HeaderAppStyle step={stepper}>
        <AddPage />
        <AdditionalInfo />
        <ButtonElement text={CustomButtonTextEnum.titleNext} handleClick={handleCall} variant="contained" />
      </HeaderAppStyle>
    </>
  );
};

export default App;
