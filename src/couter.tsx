import React from 'react';

interface IState {
  count: number;
}

interface IProps {
  title?: string;
}

class Counter extends React.Component<IProps, IState> {
  state = {
    count: 0,
  };

  static defaultProps: IProps = {
    title: ' Counter: ',
  };

  handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(`${e.clientX}, ${e.clientY}`);
    this.setState(state => {
      return { count: state.count + 1 };
    });
  };

  render() {
    return (
      <>
        <h1>
          {this.props.title}
          {this.state.count}
        </h1>
        <button onClick={this.handleClick}>+1</button>
      </>
    );
  }
}

export default Counter;
