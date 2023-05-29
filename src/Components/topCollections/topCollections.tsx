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
const bgImage = require('../../images/background2.png');
const image = require('../../images/tmpImage.png');
const tmpCollectionLogo = require('../../images/BORED.avif');

interface ITradeCollections {
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

export default function TopCollections() {
  const [tradeRanking, setTradeRanking] = useState<any[]>([]);
  useEffect(() => {
    const fetchTopCollection = async () => {
      const request = await getTradeRanking();
      const result = request.data.data.slice(0, 8);
      setTradeRanking(result);
      console.log(result);
    };
    fetchTopCollection();
  }, []);

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
      <FilterBar />
      <Gallery>
        {tradeRanking.map(collection => {
          return (
            <NftCard
              key={collection.contract_address}
              image={collection.logo_url} //change after
              name={'#1111'} //change after
              collection={collection.contract_name}
              logo={collection.logo_url}
              priceEth={collection.average_price}
              priceUsd={collection.average_price} // calculate to USD
              priceChange={collection.average_price_change}
              titleButton="View collection"
              cardSize="small"
            />
          );
        })}
        {/* <NftCard
          image={image}
          name="HAPE #8064"
          collection="HAPE PRIME"
          logo={tmpCollectionLogo}
          priceEth={32.5}
          priceUsd={58500}
          priceChange={10}
          titleButton="Collect now"
          cardSize="small"
        />
        <NftCard
          image={image}
          name="HAPE #8064"
          collection="HAPE PRIME"
          logo={tmpCollectionLogo}
          priceEth={32.5}
          priceUsd={58500}
          priceChange={10}
          titleButton="Collect now"
          cardSize="small"
        />
        <NftCard
          image={image}
          name="HAPE #8064"
          collection="HAPE PRIME"
          logo={tmpCollectionLogo}
          priceEth={32.5}
          priceUsd={58500}
          priceChange={10}
          titleButton="Collect now"
          cardSize="small"
        />
        <NftCard
          image={image}
          name="HAPE #8064"
          collection="HAPE PRIME"
          logo={tmpCollectionLogo}
          priceEth={32.5}
          priceUsd={58500}
          priceChange={10}
          titleButton="Collect now"
          cardSize="small"
        />
        <NftCard
          image={image}
          name="HAPE #8064"
          collection="HAPE PRIME"
          logo={tmpCollectionLogo}
          priceEth={32.5}
          priceUsd={58500}
          priceChange={10}
          titleButton="Collect now"
          cardSize="small"
        />
        <NftCard
          image={image}
          name="HAPE #8064"
          collection="HAPE PRIME"
          logo={tmpCollectionLogo}
          priceEth={32.5}
          priceUsd={58500}
          priceChange={10}
          titleButton="Collect now"
          cardSize="small"
        />
        <NftCard
          image={image}
          name="HAPE #8064"
          collection="HAPE PRIME"
          logo={tmpCollectionLogo}
          priceEth={32.5}
          priceUsd={58500}
          priceChange={10}
          titleButton="Collect now"
          cardSize="small"
        /> */}
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
