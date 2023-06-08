import { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import SectionTitle from 'Components/sectionTitle/sectionTitle';
import SectionBackground from '../sectionBackground/sectionBackground';
import BlurredSpot from 'Components/blurredSpot/blurredSpot';
import FilterBar from 'Components/buttonBar/filterBar';
import NftCard from 'Components/nftCard/nftCard';
import { Gallery } from './topCollections.styled';
import Button from 'Components/button/button';
import getTradeRanking from 'utils/nftApi';
import getCoinsPrice from 'utils/coinsPriceApi';
import { calculateUsdPrice } from 'utils/calculateUsdPrice';
import { ICryptoPrice, ITradeCollections } from 'utils/interface';
import {
  priceInitialState,
  collectionsInitialState,
} from 'utils/initialsState';
import { switchCoinPrice } from 'utils/switchChain';
const bgImage = require('../../images/background2.png');

export default function TopCollections() {
  const [tradeRanking, setTradeRanking] = useState<ITradeCollections>(
    collectionsInitialState
  );
  const [cryptoPrice, setCryptoPrice] =
    useState<ICryptoPrice>(priceInitialState);
  const [selectedOption, setSelectedOption] = useState<string>('Ethereum');

  const handleChecked = (e: any): void => {
    setSelectedOption(e);
  };

  useEffect(() => {
    const fetchTopCollection = async () => {
      const request = await getTradeRanking(selectedOption);
      const result = request.data.data.slice(0, 8);
      console.log(result);
      setTradeRanking(result);
    };
    fetchTopCollection();

    const fetchCoinsPrice = async () => {
      const { data } = await getCoinsPrice();
      console.log(data);
      setCryptoPrice(data);
    };
    fetchCoinsPrice();
  }, [selectedOption]);

  return (
    <Container
      maxWidth="xl"
      style={{
        display: 'flex',
        flexDirection: 'column',
        marginTop: '128px',
        padding: '0 72px',
      }}
    >
      <SectionTitle title="Top Collections" />
      <BlurredSpot
        background="143, 0, 255, 0.1"
        blur="200px"
        width="50%"
        height="1500px"
        rotate="-48deg"
        top="1600px"
      />
      <BlurredSpot
        background="109, 19, 255, 0.21"
        blur="220px"
        width="100%"
        height="1000px"
        rotate="10deg"
        top="1600px"
        left="-900px"
      />
      <SectionBackground image={bgImage} top="1600px" />
      <FilterBar selectedOption={selectedOption} updateOption={handleChecked} />
      <Gallery>
        {tradeRanking.map(collection => {
          return (
            <NftCard
              key={collection.contract_address}
              image={collection.logo_url}
              chainName={selectedOption}
              collection={collection.contract_name}
              logo={collection.logo_url}
              priceCrypto={collection.average_price}
              priceUsd={calculateUsdPrice(
                collection.average_price,
                switchCoinPrice(selectedOption, cryptoPrice)
              )}
              priceChange={collection.average_price_change}
              titleButton="View collection"
              cardSize="small"
            />
          );
        })}
      </Gallery>
      <Button
        text="see more"
        width="220px"
        height="40px"
        bgColor="#291361"
      ></Button>
    </Container>
  );
}
