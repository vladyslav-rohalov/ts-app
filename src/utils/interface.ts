export interface ICryptoPrice {
  ethereum: {
    usd: number;
  };
  binancecoin: {
    usd: number;
  };
  'matic-network': {
    usd: number;
  };
  arbitrum: {
    usd: number;
  };
  optimism: {
    usd: number;
  };
  'avalanche-2': {
    usd: number;
  };
  moonbeam: {
    usd: number;
  };
}

interface ITradeCollection {
  amounts_total: number;
  average_price: number;
  average_price_change: string;
  contract_address: string;
  contract_name: string;
  exchange_volume_change_7d: string;
  exchange_volume_change_24h: string;
  floor_price: number;
  highest_price: number;
  items_total: number;
  logo_url: string;
  lowest_price: number;
  market_cap: number;
  market_trend: string;
  mint_average_price: number;
  mint_gas_fee: number;
  mint_price_total: number;
  owners_total: number;
  price_7d: number;
  sales: number;
  sales_change: string;
  volume: number;
  volume_7d: number;
  volume_change: string;
}

export interface ITradeCollections extends Array<ITradeCollection> {}