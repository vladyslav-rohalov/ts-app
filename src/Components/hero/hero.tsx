import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CardSticker from '../cardSticker/cardSticker';
import BlurredSpot from 'Components/blurredSpot/blurredSpot';
import Features from 'Components/featuresHeader/features';
import { HeroLeftDiv, HeroRightDiv, HeroImage } from './hero.styled';

const boredLogo = require('../../images/BORED.avif');
export default function Hero() {
  return (
    <Container maxWidth="xl" style={{ display: 'flex', marginTop: '32px' }}>
      <HeroLeftDiv>
        <Typography
          variant="h1"
          align="left"
          fontSize={'5em'}
          lineHeight={'1em'}
          fontFamily={'Clash Display'}
          fontWeight={600}
        >
          Discover & collect{' '}
          <span
            style={{
              backgroundImage:
                'linear-gradient(90deg, rgba(105,234,203,1) 0%, rgba(234,204,248,1) 48%, rgba(102,84,241,1) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Extraordinary
          </span>{' '}
          NFTs{' '}
        </Typography>
        <Typography
          variant="h2"
          align="left"
          fontSize={'1.25em'}
          fontWeight={400}
          marginTop={'42px'}
        >
          The leading NFT Marketplace on Ethereum Home to the next generation of
          digital creators.Discover the best NFT collections.
        </Typography>
        <Features />
        <BlurredSpot
          width="550px"
          height="800px"
          left="150px"
          background="5, 0, 255, 0.33"
          blur="200px"
          rotate="-100deg"
        />
      </HeroLeftDiv>
      <HeroRightDiv>
        <HeroImage />
        <BlurredSpot
          width="270px"
          height="540px"
          background="143, 0, 255, 0.35"
          blur="80px"
          rotate="39deg"
        />
        <BlurredSpot
          width="270px"
          height="540px"
          top="130px"
          left="100px"
          background="173, 0, 255, 0.35"
          blur="80px"
          rotate="39deg"
        />
        <CardSticker width="500px" height="600px" left="-30px" top="16px" />
        <CardSticker
          width="300px"
          height="80px"
          top="36px"
          left="20px"
          zIndex={3}
          title="BAYC"
          text="#4836"
          accentColor="black"
          fontSize="32px"
          bgImage={boredLogo}
        />
        <CardSticker
          width="200px"
          height="80px"
          left="230px"
          top="400px"
          zIndex={3}
          title="65ETH"
          text="+17%"
          accentColor="#24FF00"
          fontSize="32px"
        />
        <CardSticker
          width="140px"
          height="70px"
          left="-60px"
          top="450px"
          zIndex={3}
          title="Auction"
          text="End in"
        />
        <CardSticker
          width="400px"
          height="90px"
          left="-30px"
          top="490px"
          title="17H : 56M : 35S"
          fontSize="32px"
        />
      </HeroRightDiv>
    </Container>
  );
}
