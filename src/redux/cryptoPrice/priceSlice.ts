import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import priceOperations from './operations';
import { IPriceState, ICryptoPrice } from 'utils/interfaces';

const initialState: IPriceState<ICryptoPrice> = {
  items: {
    ethereum: { usd: 0 },
    binancecoin: { usd: 0 },
    moonbeam: { usd: 0 },
    arbitrum: { usd: 0 },
    optimism: { usd: 0 },
    'avalanche-2': { usd: 0 },
    'matic-network': { usd: 0 },
  },
  isLoading: false,
  status: null,
  error: { status: null, message: null },
};

export const priceSlice = createSlice({
  name: 'price',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(priceOperations.fetchCryptoPrice.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(
        priceOperations.fetchCryptoPrice.rejected,
        (state, action: PayloadAction<any>) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      )
      .addCase(priceOperations.fetchCryptoPrice.fulfilled, (state, action) => {
        state.items = action.payload.data;
        state.status = action.payload.status;
        state.isLoading = false;
      });
  },
});

export const priceReducer = priceSlice.reducer;
