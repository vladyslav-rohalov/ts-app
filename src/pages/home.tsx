import Hero from 'Components/hero/hero';
import TopNft from 'Components/topNFT/topNft';
import TopCollections from 'Components/topCollections/topCollections';
import Partners from 'Components/partners/partners';

export default function Home() {
  return (
    <>
      <Hero />
      <TopNft />
      <TopCollections />
      <Partners />
    </>
  );
}
