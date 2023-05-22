import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CardSubstrate from '../cardSubstrate/cardSubstrate';
import BlurredSpot from 'Components/blurredSpot/blurredSpot';
import { HeroLeftDiv, HeroRightDiv, HeroImage } from './hero.styled';

function Hero() {
  return (
    <Container maxWidth="xl" style={{ display: 'flex', marginTop: '64px' }}>
      <HeroLeftDiv>
        <Typography
          variant="h1"
          align="left"
          fontSize={'5em'}
          lineHeight={'1em'}
          marginTop={'59px'}
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
        <ul>
          <li>
            432k+ <span>Collictions</span>
          </li>
          <li>
            200k+ <span>Artists</span>
          </li>
          <li>
            10k+ <span>Comunity</span>
          </li>
        </ul>
        <BlurredSpot
          width="550px"
          height="800px"
          top="0"
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
          top="0"
          left="0"
          background="143, 0, 255, 0.35"
          blur="80px"
          rotate="39deg"
        />
        <BlurredSpot
          width="270px"
          height="540px"
          top="130px"
          left="300px"
          background="173, 0, 255, 0.35"
          blur="80px"
          rotate="39deg"
        />
        <CardSubstrate width="400px" height="300px" left="0" top="2px" />
        <CardSubstrate width="550px" height="600px" left="0" top="0" />
      </HeroRightDiv>
    </Container>
  );
}

export default Hero;
