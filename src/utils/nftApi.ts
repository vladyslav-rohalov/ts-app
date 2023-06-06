import axios from 'axios';

const { REACT_APP_API_KEY } = process.env;

axios.defaults.baseURL = 'https://restapi.nftscan.com/api/v2/';
axios.defaults.headers.common = {
  'X-API-Key': REACT_APP_API_KEY,
};

const API_URL =
  'statistics/ranking/trade?time=1d&sort_field=volume&sort_direction=desc&show_7d_trends=false';

export default async function getTradeRanking(): Promise<any> {
  try {
    const result = await axios.get(API_URL);
    return result;
  } catch (error) {
    console.error(error);
  }
}
