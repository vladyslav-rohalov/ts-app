import React from 'react';
import ResponsiveAppBar from './Components/appBar/appBar';
import Hero from './Components/hero/hero';
import Trending from 'Components/trendingNFT/trending';
import TopCollections from 'Components/topCollections/topCollections';
import Partners from 'Components/partners/partners';

class App extends React.Component {
  render() {
    return (
      <>
        <ResponsiveAppBar />
        <Hero />
        <Trending />
        <TopCollections />
        <Partners />
      </>
    );
  }
}

export default App;
