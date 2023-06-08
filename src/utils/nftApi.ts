import axios from 'axios';
import { switchChainURL } from './switchChain';

const { REACT_APP_API_KEY } = process.env;

axios.defaults.headers.common = {
  'X-API-Key': REACT_APP_API_KEY,
};

export default async function getTradeRanking(chain: string): Promise<any> {
  try {
    const result = await axios.get(switchChainURL(chain));
    return result;
  } catch (error) {
    console.error(error);
  }
}
