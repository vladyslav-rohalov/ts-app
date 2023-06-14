import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getSingleNftUrl } from 'utils/getSingleNftUrl';
import { IQueryParams } from 'utils/interfaces';
const { REACT_APP_API_KEY } = process.env;

axios.defaults.headers.common = {
  'X-API-Key': REACT_APP_API_KEY,
};

const fetchFirstOfCollection = createAsyncThunk(
  'nft/fetchFirstOfCollection',
  async ({ chain, addressCollection }: IQueryParams, thunkAPI) => {
    try {
      const response = await axios.get(
        getSingleNftUrl(chain, addressCollection)
      );
      return { data: response.data.data };
    } catch (e: any) {
      return thunkAPI.rejectWithValue({
        status: e.response.code,
        message: e.response.msg,
      });
    }
  }
);

const nftSingleOperations = {
  fetchFirstOfCollection,
};

export default nftSingleOperations;
