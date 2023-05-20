import React, { Component } from 'react';

interface Position {
  id: string;
  value: string;
  title: string;
}

interface FormState {
  inputText: string;
  textareaText: string;
  selectText: string;
  showData: {
    name: string;
    text: string;
    position: string;
  };
}

const POSITIONS: Array<Position> = [
  {
    id: 'fd',
    value: 'Front-end Developer',
    title: 'Front-end Developer',
  },
  {
    id: 'bd',
    value: 'Back-end Developer',
    title: 'Back-end Developer',
  },
];

const DEFAULT_SELECT_VALUE: string = POSITIONS[0].value;
const styles: React.CSSProperties = { display: 'block', marginTop: '50px' };

class FormTyping extends Component<{}, FormState> {
  state = {
    inputText: '',
    textareaText: '',
    selectText: DEFAULT_SELECT_VALUE,
    showData: {
      name: '',
      text: '',
      position: '',
    },
  };

  private rootRef = React.createRef<HTMLSelectElement>();

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const inputText: string = e.target.value;
    this.setState({ inputText });
  };

  handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const textareaText: string = e.target.value;
    this.setState({ textareaText });
  };

  handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const selectText: string = e.target.value;
    this.setState({ selectText });
  };

  handleShow = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    const { inputText, textareaText, selectText } = this.state;

    this.setState({
      inputText: '',
      textareaText: '',
      selectText: DEFAULT_SELECT_VALUE,
      showData: {
        name: inputText,
        text: textareaText,
        position: selectText,
      },
    });
  };

  render() {
    const { inputText, textareaText, selectText, showData } = this.state;
    const { name, text, position } = showData;

    return (
      <>
        <form>
          <label style={styles}>
            Name:
            <input
              type="text"
              value={inputText}
              onChange={this.handleInputChange}
            />
          </label>

          <label style={styles}>
            Text:
            <textarea
              value={textareaText}
              onChange={this.handleTextareaChange}
            />
          </label>

          <select
            style={styles}
            value={selectText}
            onChange={this.handleSelectChange}
            ref={this.rootRef}
          >
            {POSITIONS.map(({ id, value, title }) => (
              <option key={id} value={value}>
                {title}
              </option>
            ))}
          </select>

          <button onClick={this.handleShow}>Show Data</button>
        </form>

        <h2>{name}</h2>
        <h3>{text}</h3>
        <h3>{position}</h3>
      </>
    );
  }
}

export default FormTyping;
