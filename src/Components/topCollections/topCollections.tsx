import { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import SectionTitle from 'Components/sectionTitle/sectionTitle';
import SectionBackground from '../sectionBackground/sectionBackground';
import BlurredSpot from 'Components/blurredSpot/blurredSpot';
import FilterBar from 'Components/buttonBar/filterBar';
import NftCard from 'Components/nftCard/nftCard';
import { Gallery } from './topCollections.styled';
import Button from 'Components/button/button';
import getNftCollectionsByRanking from 'utils/nftApi';
const bgImage = require('../../images/background2.png');
const image = require('../../images/tmpImage.png');
const tmpCollectionLogo = require('../../images/BORED.avif');

// interface TopCollections extends ReactComponentElement {}

export default function TopCollections() {
  const [topCollections, setTopCollections] = useState([]);
  useEffect(() => {
    const fetchTopCollection = async () => {
      const result = await getNftCollectionsByRanking();
      setTopCollections(result);
      console.log(topCollections);
    };
    fetchTopCollection();
  }, []);

  getNftCollectionsByRanking();
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
