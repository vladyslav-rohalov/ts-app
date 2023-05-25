import { Container, RadioButton } from './filterBar.styled';

export default function FilterBar() {
  return (
    <Container>
      <label htmlFor="sizeWeight">
        <RadioButton
          type="radio"
          name="sizeBy"
          value="weight"
          id="sizeWeight"
          defaultChecked={true}
        />
        Art
      </label>
      <label htmlFor="sizeDimensions">
        <RadioButton
          type="radio"
          name="sizeBy"
          value="dimensions"
          id="sizeDimensions"
        />
        Music
      </label>
    </Container>
  );
}
