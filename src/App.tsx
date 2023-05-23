import React from 'react';
import ResponsiveAppBar from './Components/appBar/appBar';
import Hero from './Components/hero/hero';
import Trending from 'Components/trendingNFT/trending';

class App extends React.Component {
  render() {
    return (
      <>
        <ResponsiveAppBar />
        <Hero />
        <Trending />
      </>
    );
  }
}

export default App;
