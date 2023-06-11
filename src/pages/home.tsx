import Hero from 'Components/hero/hero';
import Trending from 'Components/trendingNFT/trending';
import TopCollections from 'Components/topCollections/topCollections';
import Partners from 'Components/partners/partners';

export default function Home() {
  return (
    <>
      <Hero />
      <Trending />
      <TopCollections />
      <Partners />
    </>
  );
}
