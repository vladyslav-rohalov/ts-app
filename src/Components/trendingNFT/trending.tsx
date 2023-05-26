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
import TrandingCard from '../trendingCard/trendingCard';
import Button from 'Components/button/button';

const bgImage = require('../../images/background.png');
const image = require('../../images/tmpImage.png');
const tmpCollectionLogo = require('../../images/BORED.avif');
SwiperCore.use([FreeMode, Navigation]);

export default function Trending() {
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
          <TrandingCard
            image={image}
            name="HAPE #8064"
            collection="HAPE PRIME"
            logo={tmpCollectionLogo}
            priceEth={32.5}
            priceUsd={58500}
            priceChange={10}
            titleButton="Collect now"
          />
        </SwiperSlide>
        <SwiperSlide>
          <TrandingCard
            image={image}
            name="HAPE #8064"
            collection="HAPE PRIME"
            logo={tmpCollectionLogo}
            priceEth={32.5}
            priceUsd={58500}
            priceChange={10}
            titleButton="Collect now"
          />
        </SwiperSlide>
        <SwiperSlide>
          <TrandingCard
            image={image}
            name="HAPE #8064"
            collection="HAPE PRIME"
            logo={tmpCollectionLogo}
            priceEth={32.5}
            priceUsd={58500}
            priceChange={10}
            titleButton="Collect now"
          />
        </SwiperSlide>
        <SwiperSlide>
          <TrandingCard
            image={image}
            name="HAPE #8064"
            collection="HAPE PRIME"
            logo={tmpCollectionLogo}
            priceEth={32.5}
            priceUsd={58500}
            priceChange={10}
            titleButton="Collect now"
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
