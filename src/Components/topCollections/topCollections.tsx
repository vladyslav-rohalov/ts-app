import Container from '@mui/material/Container';
import SectionTitle from 'Components/sectionTitle/sectionTitle';
import SectionBackground from '../sectionBackground/sectionBackground';
import BlurredSpot from 'Components/blurredSpot/blurredSpot';
import FilterBar from 'Components/buttonBar/filterBar';

const bgImage = require('../../images/background2.png');

export default function TopCollections() {
  return (
    <Container
      maxWidth="xl"
      style={{
        display: 'flex',
        flexDirection: 'column',
        marginTop: '128px',
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
    </Container>
  );
}
