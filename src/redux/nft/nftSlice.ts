import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import nftOperations from './operations';
import { ICollectionsState, ITrendingCollections } from 'utils/types';

const initialState: ICollectionsState<ITrendingCollections> = {
  items: [],
  isLoading: false,
  status: null,
  error: { status: null, message: null },
};

interface IPayloadError {
  status: number | null;
  message: string | null;
}

export const nftCollectionsSlice = createSlice({
  name: 'collections',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(
        nftOperations.fetchTradingCollections.pending,
        (state, action) => {
          state.isLoading = true;
        }
      )
      .addCase(
        nftOperations.fetchTradingCollections.rejected,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      )
      .addCase(
        nftOperations.fetchTradingCollections.fulfilled,
        (state, action) => {
          state.items.push(action.payload.data);
          state.status = action.payload.status;
        }
      );
  },
});

// export const {  } = counterSlice.actions;

export default nftCollectionsSlice.reducer;
