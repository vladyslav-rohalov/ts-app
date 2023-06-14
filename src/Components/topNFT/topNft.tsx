import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectNft, selectIsLoading } from 'redux/nftSingle/selectors';
import Container from '@mui/material/Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import checkImgUrl from 'utils/checkImgUrl';
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
// import { SkeletonNFT } from 'Components/skeleton/skeleton';
const bgImage = require('../../images/background.png');
SwiperCore.use([FreeMode, Navigation]);

export default function TopNft() {
  const isLoading = useSelector(selectIsLoading);
  const topNftSet = useSelector(selectNft);

  useEffect(() => {
    console.log(topNftSet);
  }, [topNftSet]);
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
        {!isLoading &&
          topNftSet.map(nft => {
            return (
              <SwiperSlide>
                <NftCard
                  key={nft.nftscan_id}
                  image={checkImgUrl(nft.image_uri)}
                  name={`#${nft.token_id}`}
                  collection={nft.contract_name}
                  logo={nft.image_uri}
                  priceCrypto={nft.latest_trade_price || 0}
                  priceUsd="58500"
                  priceChange="+10%"
                  titleButton="Collect now"
                  cardSize="big"
                  chainName="Ethereum"
                />
              </SwiperSlide>
            );
          })}
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
