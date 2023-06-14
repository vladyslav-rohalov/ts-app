import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IFilterChain } from 'utils/interfaces';

const initialState: IFilterChain = { chain: 'Ethereum' };

export const filterChianSlice = createSlice({
  name: 'filterChain',
  initialState,
  reducers: {
    setChain(state, action) {
      state.chain = action.payload;
    },
  },
});

export const { setChain } = filterChianSlice.actions;
export const filterChainReducer = filterChianSlice.reducer;
