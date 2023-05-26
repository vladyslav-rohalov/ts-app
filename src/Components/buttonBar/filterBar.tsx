import { useState } from 'react';
import { Container, RadioButtonHiden, RadioButton } from './filterBar.styled';

export default function FilterBar() {
  const [selectedOption, setSelectedOption] = useState('Art');

  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSelectedOption(value);
  };

  return (
    <Container>
      <label htmlFor="Art">
        <RadioButtonHiden
          type="radio"
          name="Art"
          value="Art"
          id="Art"
          checked={selectedOption === 'Art'}
          onChange={handleChecked}
        />
        <RadioButton
          bgColor={selectedOption === 'Art' ? '#2F80ED' : 'transparent'}
        >
          Art
        </RadioButton>
      </label>
      <label htmlFor="Music">
        <RadioButtonHiden
          type="radio"
          name="Music"
          value="Music"
          id="Music"
          checked={selectedOption === 'Music'}
          onChange={handleChecked}
        />
        <RadioButton
          bgColor={selectedOption === 'Music' ? '#2F80ED' : 'transparent'}
        >
          Music
        </RadioButton>
      </label>
      <label htmlFor="Game">
        <RadioButtonHiden
          type="radio"
          name="Game"
          value="Game"
          id="Game"
          checked={selectedOption === 'Game'}
          onChange={handleChecked}
        />
        <RadioButton
          bgColor={selectedOption === 'Game' ? '#2F80ED' : 'transparent'}
        >
          Game
        </RadioButton>
      </label>
      <label htmlFor="Sports">
        <RadioButtonHiden
          type="radio"
          name="Sports"
          value="Sports"
          id="Sports"
          checked={selectedOption === 'Sports'}
          onChange={handleChecked}
        />
        <RadioButton
          bgColor={selectedOption === 'Sports' ? '#2F80ED' : 'transparent'}
        >
          Sports
        </RadioButton>
      </label>
      <label htmlFor="Metaverse">
        <RadioButtonHiden
          type="radio"
          name="Metaverse"
          value="Metaverse"
          id="Metaverse"
          checked={selectedOption === 'Metaverse'}
          onChange={handleChecked}
        />
        <RadioButton
          bgColor={selectedOption === 'Metaverse' ? '#2F80ED' : 'transparent'}
        >
          Metaverse
        </RadioButton>
      </label>
    </Container>
  );
}
