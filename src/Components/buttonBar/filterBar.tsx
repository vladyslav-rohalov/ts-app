import { Container, RadioButtonHiden, RadioButton } from './filterBar.styled';

type FilterProps = {
  selectedOption: string;
  updateOption: any;
};

export default function FilterBar({
  selectedOption,
  updateOption,
}: FilterProps) {
  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    updateOption(value);
  };

  return (
    <Container>
      <label htmlFor="Ethereum">
        <RadioButtonHiden
          type="radio"
          name="Ethereum"
          value="Ethereum"
          id="Ethereum"
          checked={selectedOption === 'Ethereum'}
          onChange={handleChecked}
        />
        <RadioButton
          bgColor={selectedOption === 'Ethereum' ? '#2F80ED' : 'transparent'}
        >
          Ethereum
        </RadioButton>
      </label>
      <label htmlFor="BSC">
        <RadioButtonHiden
          type="radio"
          name="BSC"
          value="BSC"
          id="BSC"
          checked={selectedOption === 'BSC'}
          onChange={handleChecked}
        />
        <RadioButton
          bgColor={selectedOption === 'BSC' ? '#2F80ED' : 'transparent'}
        >
          BSC
        </RadioButton>
      </label>
      <label htmlFor="Polygon">
        <RadioButtonHiden
          type="radio"
          name="Polygon"
          value="Polygon"
          id="Polygon"
          checked={selectedOption === 'Polygon'}
          onChange={handleChecked}
        />
        <RadioButton
          bgColor={selectedOption === 'Polygon' ? '#2F80ED' : 'transparent'}
        >
          Polygon
        </RadioButton>
      </label>
      <label htmlFor="Arbitrum">
        <RadioButtonHiden
          type="radio"
          name="Arbitrum"
          value="Arbitrum"
          id="Arbitrum"
          checked={selectedOption === 'Arbitrum'}
          onChange={handleChecked}
        />
        <RadioButton
          bgColor={selectedOption === 'Arbitrum' ? '#2F80ED' : 'transparent'}
        >
          Arbitrum
        </RadioButton>
      </label>
      <label htmlFor="Optimism">
        <RadioButtonHiden
          type="radio"
          name="Optimism"
          value="Optimism"
          id="Optimism"
          checked={selectedOption === 'Optimism'}
          onChange={handleChecked}
        />
        <RadioButton
          bgColor={selectedOption === 'Optimism' ? '#2F80ED' : 'transparent'}
        >
          Optimism
        </RadioButton>
      </label>
      <label htmlFor="Avalanche">
        <RadioButtonHiden
          type="radio"
          name="Avalanche"
          value="Avalanche"
          id="Avalanche"
          checked={selectedOption === 'Avalanche'}
          onChange={handleChecked}
        />
        <RadioButton
          bgColor={selectedOption === 'Avalanche' ? '#2F80ED' : 'transparent'}
        >
          Avalanche
        </RadioButton>
      </label>
      <label htmlFor="Moonbeam">
        <RadioButtonHiden
          type="radio"
          name="Moonbeam"
          value="Moonbeam"
          id="Moonbeam"
          checked={selectedOption === 'Moonbeam'}
          onChange={handleChecked}
        />
        <RadioButton
          bgColor={selectedOption === 'Moonbeam' ? '#2F80ED' : 'transparent'}
        >
          Moonbeam
        </RadioButton>
      </label>
    </Container>
  );
}
