import { ButtonStyled } from './button.styled';

type ButtonProps = {
  text: string;
  width: string;
  height: string;
  bgColor: string;
  color?: string;
  fontSize?: string;
};

export default function Button({
  text,
  width,
  height,
  bgColor,
  color,
  fontSize,
}: ButtonProps) {
  return (
    <ButtonStyled
      type="button"
      width={width}
      height={height}
      bgColor={bgColor}
      color={color}
      fontSize={fontSize}
    >
      {text}
    </ButtonStyled>
  );
}
