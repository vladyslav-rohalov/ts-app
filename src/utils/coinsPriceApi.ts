import axios from 'axios';

const API_URL =
  'https://api.coingecko.com/api/v3/simple/price?ids=ethereum,binancecoin,matic-network,arbitrum,optimism,avalanche-2,moonbeam&vs_currencies=usd';

export default async function getCoinsPrice(): Promise<any> {
  try {
    const result = await axios.get(API_URL);
    return result;
  } catch (error) {
    console.error(error);
  }
}
