import { useSelector, useDispatch } from 'react-redux';
import {
  selectTopCollections,
  selectIsLoading,
} from 'redux/nftCollections/selectors';
import { selectPrice } from 'redux/cryptoPrice/selectors';
import { setChain } from 'redux/filterChain/filterChainSlice';
import { selectChain } from 'redux/filterChain/selectors';
import { AppDispatch } from 'redux/store';
import Container from '@mui/material/Container';
import SectionTitle from 'Components/sectionTitle/sectionTitle';
import SectionBackground from '../sectionBackground/sectionBackground';
import BlurredSpot from 'Components/blurredSpot/blurredSpot';
import FilterBar from 'Components/buttonBar/filterBar';
import NftCard from 'Components/nftCard/nftCard';
import { Gallery } from './topCollections.styled';
import Button from 'Components/button/button';
import { calculateUsdPrice } from 'utils/calculateUsdPrice';
import { switchCoinPrice } from 'utils/switchChain';
import { SkeletonNFT } from 'Components/skeleton/skeleton';

const bgImage = require('../../images/background2.png');

export default function TopCollections() {
  const useAppDispatch = () => useDispatch<AppDispatch>();
  const dispatch = useAppDispatch();
  const trendingCollections = useSelector(selectTopCollections)?.slice(0, 8);
  const price = useSelector(selectPrice);
  const isLoading = useSelector(selectIsLoading);
  const { chain } = useSelector(selectChain);

  const handleChecked = (e: any): void => {
    dispatch(setChain(e));
  };

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

      <FilterBar selectedOption={chain} updateOption={handleChecked} />
      <Gallery>
        {!isLoading &&
          trendingCollections?.map(collection => {
            return (
              <NftCard
                key={collection.contract_address}
                image={collection.logo_url}
                chainName={chain}
                collection={collection.contract_name}
                logo={collection.logo_url}
                priceCrypto={collection.average_price}
                priceUsd={calculateUsdPrice(
                  collection.average_price,
                  switchCoinPrice(chain, price)
                )}
                priceChange={collection.average_price_change}
                titleButton="View collection"
                cardSize="small"
              />
            );
          })}
        {isLoading && (
          <>
            <SkeletonNFT width={292} height={392} />
            <SkeletonNFT width={292} height={392} />
            <SkeletonNFT width={292} height={392} />
            <SkeletonNFT width={292} height={392} />
            <SkeletonNFT width={292} height={392} />
            <SkeletonNFT width={292} height={392} />
            <SkeletonNFT width={292} height={392} />
            <SkeletonNFT width={292} height={392} />
          </>
        )}
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
