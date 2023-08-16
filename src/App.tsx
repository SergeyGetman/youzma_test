import './Index.style';
import { HeaderAppStyle } from './Index.style';
import AddPage from './components/AddPage';
import AdditionalInfo from './components/AdditionalInfo';
import ModalWindow from './components/modal/ModalWindow';
import { CustomStepperEnum } from './enam';
import { useSelector } from 'react-redux';
import { AccountPagesState } from './types';

export const App = () => {
  const stepper = useSelector((state: AccountPagesState | any) => state.globalState.count);

  return (
    <>
      {stepper === CustomStepperEnum.stepZero ? (
        <HeaderAppStyle step={stepper}>
          <AddPage />
          <AdditionalInfo />
        </HeaderAppStyle>
      ) : (
        <>
          <ModalWindow />
        </>
      )}
    </>
  );
};

export default App;
