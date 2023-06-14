export interface ITrendingCollections {
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

export interface ICollectionsState<ITrendingCollections> {
  items: Array<ITrendingCollections>;
  isLoading: boolean;
  error: { status: null | number; message: null | string };
}

export interface INft {
  amount: string;
  attributes: any[];
  content_type: string;
  content_uri: string;
  contract_address: string;
  contract_name: string;
  contract_token_id: string;
  description: string;
  erc_type: string;
  external_link: string;
  image_uri: string;
  latest_trade_price: number;
  latest_trade_symbol: string;
  latest_trade_timestamp: number;
  latest_trade_token: number;
  metadata_json: string;
  mint_price: number;
  mint_timestamp: number;
  mint_transaction_hash: string;
  minter: string;
  name: string;
  nftscan_id: string;
  nftscan_uri: string;
  own_timestamp: number;
  owner: string;
  rarity_rank: number;
  rarity_score: number;
  small_nftscan_uri: string;
  token_id: string;
  token_uri: string;
}

export interface INftState<INft> {
  items: Array<INft>;
  isLoading: boolean;
  error: { status: null | number; message: null | string };
}

export interface IPriceValue {
  usd: number;
}

export interface ICryptoPrice {
  [key: string]: IPriceValue;
}

export interface IPriceState<ICryptoPrice> {
  items: ICryptoPrice;
  isLoading: boolean;
  status: null | number;
  error: { status: null | number; message: null | string };
}

export interface IQueryParams extends Object {
  chain: string;
  addressCollection: string;
}

export interface IFilterChain {
  [key: string]: string;
}
