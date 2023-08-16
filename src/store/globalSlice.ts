import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AccountPagesState, IProduct } from '../types';
import { CustomStepperEnum } from '../enam';

export const sliceAccountPages = createSlice({
  name: 'accountPages',
  initialState: {
    status: 0,
    count: CustomStepperEnum.stepZero as CustomStepperEnum,
    globalArrayAccount: [] as IProduct[],
  } as AccountPagesState,

  reducers: {
    addDataPages(state, action) {
      state.globalArrayAccount = action.payload.products;
    },
    removeLastTodo(state, action) {
      state.globalArrayAccount = state.globalArrayAccount.filter((arrow) => arrow.id !== action.payload);
    },
    getStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export default sliceAccountPages.reducer;
export const { removeLastTodo, addDataPages, getStatus } = sliceAccountPages.actions;