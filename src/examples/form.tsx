import React from 'react';

class Form extends React.Component {
  handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    console.log(e.target);
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      text: { value: string };
    };
    const text: string = target.text.value;

    console.log(text);
  };

  handleCopy = (e: React.ClipboardEvent) => {
    console.log('Coppied');
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Some text:
          <input
            type="text"
            name="text"
            onFocus={this.handleFocus}
            onCopy={this.handleCopy}
          />
          <button type="submit">Submit</button>
        </label>
      </form>
    );
  }
}

export default Form;
