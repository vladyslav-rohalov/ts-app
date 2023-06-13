import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const API_URL =
  'https://api.coingecko.com/api/v3/simple/price?ids=ethereum,binancecoin,matic-network,arbitrum,optimism,avalanche-2,moonbeam&vs_currencies=usd';

const fetchCryptoPrice = createAsyncThunk(
  'price/fetchCryptoPrice',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(API_URL);
      return { data: response.data, status: response.status };
    } catch (e: any) {
      return thunkAPI.rejectWithValue({
        status: e.response.status,
        message: e.response.statusText,
      });
    }
  }
);

const priceOperations = {
  fetchCryptoPrice,
};

export default priceOperations;
