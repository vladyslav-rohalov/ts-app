import React from 'react';
import Counter from './couter';
import Form from './form';
import FormTyping from './formTyping';
import Portal from './portal';
import Context from './context';

class App extends React.Component {
  render() {
    return (
      <>
        <Counter title="My Counter: " />
        <Form />
        <FormTyping />
        <Portal children="This is Portal" />
        <Context />
      </>
    );
  }
}

export default App;
