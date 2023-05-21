import React from 'react';
import ResponsiveAppBar from './Components/appBar/appBar';
import Hero from './Components/hero/hero';

class App extends React.Component {
  render() {
    return (
      <>
        <ResponsiveAppBar />
        <Hero />
      </>
    );
  }
}

export default App;
