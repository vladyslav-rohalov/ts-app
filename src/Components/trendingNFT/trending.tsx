import Container from '@mui/material/Container';
import SectionTitle from 'Components/sectionTitle/sectionTitle';
import SectionBackground from '../sectionBackground/sectionBackground';
import BlurredSpot from 'Components/blurredSpot/blurredSpot';
import TrandingCards from '../trendingCard/trendingCard';
import Button from 'Components/button/button';
const bgImage = require('../../images/background.png');

export default function Trending() {
  return (
    <Container
      maxWidth="xl"
      style={{
        display: 'flex',
        flexDirection: 'column',
        marginTop: '128px',
      }}
    >
      <SectionBackground image={bgImage} top="850px" />
      <BlurredSpot
        width="100%"
        height="900px"
        left="0"
        top="1000px"
        background="112, 16, 187, 0.3"
        blur="200px"
        rotate="0deg"
      />
      <SectionTitle title="Trending NFTs" />
      <TrandingCards />
      <Button
        text="see more"
        width="220px"
        height="40px"
        bgColor="#291361"
      ></Button>
    </Container>
  );
}
