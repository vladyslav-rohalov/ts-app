export const getSingleNftUrl = (
  chain: string,
  addressCollection: string
): string => {
  switch (chain) {
    case 'Ethereum':
      return `https://restapi.nftscan.com/api/v2/assets/${addressCollection}/1?show_attribute=false`;
    case 'BSC':
      return `https://bnbapi.nftscan.com/api/v2/assets/${addressCollection}/1?show_attribute=false`;
    case 'Polygon':
      return `https://polygonapi.nftscan.com/api/v2/assets/${addressCollection}/1?show_attribute=false`;
    case 'Arbitrum':
      return `https://arbitrumapi.nftscan.com/api/v2/assets/${addressCollection}/1?show_attribute=false`;
    case 'Optimism':
      return `https://optimismapi.nftscan.com/api/v2/assets/${addressCollection}/1?show_attribute=false`;
    case 'Avalanche':
      return `"https://avaxapi.nftscan.com/api/v2/assets/${addressCollection}/1?show_attribute=false`;
    case 'Moonbeam':
      return `https://moonbeamapi.nftscan.com/api/v2/assets/${addressCollection}/1?show_attribute=false`;
    default:
      return `https://restapi.nftscan.com/api/v2/assets/${addressCollection}/1?show_attribute=false`;
  }
};
