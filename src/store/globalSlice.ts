import { createSlice } from '@reduxjs/toolkit';
import { AccountPagesState, IProduct } from '../types';

export const sliceAccountPages = createSlice({
  name: 'accountPages',
  initialState: {
    status: 0,
    count: 0,
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
    addSteper(state, action) {
      state.count = action.payload;
    },
    addFromForm(state, action) {
      state.globalArrayAccount.push(action.payload);
    },
  },
});

export default sliceAccountPages.reducer;
export const { removeLastTodo, addDataPages, getStatus, addFromForm, addSteper } = sliceAccountPages.actions;
