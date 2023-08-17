import './Index.style';
import { HeaderAppStyle } from './Index.style';
import AddPage from './components/AddPage';
import AdditionalInfo from './components/AdditionalInfo';
import { CustomButtonTextEnum } from './enam';
import { useSelector } from 'react-redux';
import { AccountPagesState } from './types';
import { ButtonElement } from './components/button/ButtonElement';
import { useNavigate } from 'react-router-dom';

export const App = () => {
  const stepper = useSelector((state: AccountPagesState | any) => state.globalState.count);

  const navigate = useNavigate();
  const handleChangeStep = () => {
    navigate('/add');
  };

  return (
    <>
      <HeaderAppStyle step={stepper}>
        <AddPage />
        <AdditionalInfo />
        <ButtonElement
          text={CustomButtonTextEnum.titleNext}
          handleClick={handleChangeStep}
          variant="contained"
        />
      </HeaderAppStyle>
    </>
  );
};

export default App;
