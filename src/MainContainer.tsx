import React, { FC } from 'react';
import App from './App';
import { IMainContain } from './types';
import { CustomStepperEnum } from './enam';

const MainContainer: FC<IMainContain> = ({ children, step }) => {
  return (
    <div>
      {step === CustomStepperEnum.stepZero ? (
        <div>{children}</div>
      ) : (
        <div>
          <App />
        </div>
      )}
    </div>
  );
};

export default MainContainer;
