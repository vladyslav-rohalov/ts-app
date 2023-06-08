import { ICryptoPrice } from './interface';

export const switchChainURL = (chain: string): string => {
  switch (chain) {
    case 'Ethereum':
      return 'https://restapi.nftscan.com/api/v2/statistics/ranking/trade?time=1d&sort_field=volume&sort_direction=desc&show_7d_trends=false';
    case 'BSC':
      return 'https://bnbapi.nftscan.com/api/v2/statistics/ranking/trade?time=1d&sort_field=volume&sort_direction=desc&show_7d_trends=false';
    case 'Polygon':
      return 'https://polygonapi.nftscan.com/api/v2/statistics/ranking/trade?time=1d&sort_field=volume&sort_direction=desc&show_7d_trends=false';
    case 'Arbitrum':
      return 'https://arbitrumapi.nftscan.com/api/v2/statistics/ranking/trade?time=1d&sort_field=volume&sort_direction=desc&show_7d_trends=false';
    case 'Optimism':
      return 'https://optimismapi.nftscan.com/api/v2/statistics/ranking/trade?time=1d&sort_field=volume&sort_direction=desc&show_7d_trends=false';
    case 'Avalanche':
      return 'https://avaxapi.nftscan.com/api/v2/statistics/ranking/trade?time=1d&sort_field=volume&sort_direction=desc&show_7d_trends=false';
    case 'Moonbeam':
      return 'https://moonbeamapi.nftscan.com/api/v2/statistics/ranking/trade?time=1d&sort_field=volume&sort_direction=desc&show_7d_trends=false';
    default:
      return 'https://restapi.nftscan.com/api/v2/statistics/ranking/trade?time=1d&sort_field=volume&sort_direction=desc&show_7d_trends=false';
  }
};

export const switchTicker = (chainName: string): string => {
  switch (chainName) {
    case 'Ethereum':
      return 'ETH';
    case 'BSC':
      return 'BNB';
    case 'Polygon':
      return 'MATIC';
    case 'Arbitrum':
      return 'ARB';
    case 'Optimism':
      return 'OP';
    case 'Avalanche':
      return 'AVAX';
    case 'Moonbeam':
      return 'GLMR';
    default:
      return 'ETH';
  }
};

export const switchCoinPrice = (
  chainName: string,
  cryptoPrice: ICryptoPrice
): number => {
  switch (chainName) {
    case 'Ethereum':
      return cryptoPrice.ethereum.usd;
    case 'BSC':
      return cryptoPrice.binancecoin.usd;
    case 'Polygon':
      return cryptoPrice.binancecoin.usd;
    case 'Arbitrum':
      return cryptoPrice.binancecoin.usd;
    case 'Optimism':
      return cryptoPrice.binancecoin.usd;
    case 'Avalanche':
      return cryptoPrice.binancecoin.usd;
    case 'Moonbeam':
      return cryptoPrice.binancecoin.usd;
    default:
      return cryptoPrice.ethereum.usd;
  }
};
