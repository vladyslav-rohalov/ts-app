import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import nftOperations from './operations';
import { INftState, INft } from 'utils/interfaces';

const initialState: INftState<INft> = {
  items: [],
  isLoading: false,
  error: { status: null, message: null },
};

export const nftSingleSlice = createSlice({
  name: 'collections',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(
        nftOperations.fetchFirstOfCollection.pending,
        (state, action) => {
          state.isLoading = true;
        }
      )
      .addCase(
        nftOperations.fetchFirstOfCollection.rejected,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      )
      .addCase(
        nftOperations.fetchFirstOfCollection.fulfilled,
        (state, action) => {
          if (action.payload.data === null) return;
          state.items = [...state.items, action.payload.data];
          state.isLoading = false;
        }
      );
  },
});

export const singleNftReducer = nftSingleSlice.reducer;
