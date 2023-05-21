import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import {
  HeroMainDIv,
  HeroLeftDiv,
  HeroRightDiv,
  HeroLeftSpot,
} from './hero.styled';

function Hero() {
  return (
    <Container maxWidth="xl">
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
        <HeroLeftSpot />
      </HeroLeftDiv>
      <HeroRightDiv></HeroRightDiv>
    </Container>
  );
}

export default Hero;
