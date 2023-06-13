import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { switchChainURL } from 'utils/switchChain';
const { REACT_APP_API_KEY } = process.env;

axios.defaults.headers.common = {
  'X-API-Key': REACT_APP_API_KEY,
};

const fetchTradingCollections = createAsyncThunk(
  'nft/fetchTopCollections',
  async (chain: string, thunkAPI) => {
    try {
      const response = await axios.get(switchChainURL(chain));
      return { data: response.data.data };
    } catch (e: any) {
      return thunkAPI.rejectWithValue({
        status: e.response.data.code,
        message: e.response.data.msg,
      });
    }
  }
);

const nftCollectionsOperations = {
  fetchTradingCollections,
};

export default nftCollectionsOperations;
