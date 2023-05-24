import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Background } from './trending.styled';
import BlurredSpot from 'Components/blurredSpot/blurredSpot';
import TrandingCards from '../trendingCard/trendingCard';

export default function Trending() {
  return (
    <Container
      maxWidth="xl"
      style={{ display: 'flex', flexDirection: 'column', marginTop: '128px' }}
    >
      <Background />
      <BlurredSpot
        width="100%"
        height="900px"
        left="0"
        top="1000px"
        background="112, 16, 187, 0.3"
        blur="200px"
        rotate="0deg"
      />
      <Typography
        variant="h2"
        align="center"
        fontSize={'3.5em'}
        lineHeight={'1.23em'}
        fontFamily={'Clash Display'}
        fontWeight={600}
        style={{
          backgroundImage:
            'linear-gradient(90deg, rgba(105,234,203,1) 0%, rgba(234,204,248,1) 48%, rgba(102,84,241,1) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          margin: '0 auto',
        }}
      >
        Trending NFTs
      </Typography>
      <TrandingCards />
    </Container>
  );
}
