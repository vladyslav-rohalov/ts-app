export const calculateUsdPrice = (
  cryptoPrice: number,
  usdPrice: number
): string => {
  return Math.round(cryptoPrice * usdPrice).toLocaleString();
};
