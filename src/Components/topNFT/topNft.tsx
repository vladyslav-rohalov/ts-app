import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  selectTopCollections,
  selectIsLoading,
} from 'redux/nftCollections/selectors';
import { selectNft } from 'redux/nftSingle/selectors';
import nftSingleOperations from 'redux/nftSingle/operations';
import { AppDispatch } from 'redux/store';
import Container from '@mui/material/Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { FreeMode, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import './styles.css';
import SectionTitle from 'Components/sectionTitle/sectionTitle';
import SectionBackground from '../sectionBackground/sectionBackground';
import BlurredSpot from 'Components/blurredSpot/blurredSpot';
import NftCard from '../nftCard/nftCard';
import Button from 'Components/button/button';

const bgImage = require('../../images/background.png');
const image = require('../../images/tmpImage.png');
const tmpCollectionLogo = require('../../images/BORED.avif');
SwiperCore.use([FreeMode, Navigation]);

export default function TopNft() {
  // const useAppDispatch = () => useDispatch<AppDispatch>();
  // const dispatch = useAppDispatch();
  // const trendingCollections = useSelector(selectTopCollections)?.slice(0, 8);
  // const addressesCollections = trendingCollections.map(
  //   collection => collection.contract_address
  // );
  // const topNftSet = useSelector(selectNft);

  // useEffect(() => {
  //   console.log(topNftSet);
  // }, [topNftSet]);

  // useEffect(() => {
  //   addressesCollections.map(addressCollection => {
  //     dispatch(
  //       nftSingleOperations.fetchFirstOfCollection({
  //         chain: 'Ethereum',
  //         addressCollection,
  //       })
  //     );
  //   });
  // }, [addressesCollections]);

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
      <SectionBackground image={bgImage} top="850px" />
      <BlurredSpot
        width="100%"
        height="650px"
        top="800px"
        background="112, 16, 187, 0.3"
        blur="200px"
        rotate="0deg"
      />
      <SectionTitle title="Trending NFTs" />
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[FreeMode, Navigation]}
        resistance={false}
        shortSwipes={false}
      >
        <SwiperSlide>
          <NftCard
            image={image}
            name="HAPE #8064"
            collection="HAPE PRIME"
            logo={tmpCollectionLogo}
            priceCrypto={32.5}
            priceUsd="58500"
            priceChange="+10%"
            titleButton="Collect now"
            cardSize="big"
            chainName="Ethereum"
          />
        </SwiperSlide>
      </Swiper>
      <Button
        text="see more"
        width="220px"
        height="40px"
        bgColor="#291361"
      ></Button>
    </Container>
  );
}
