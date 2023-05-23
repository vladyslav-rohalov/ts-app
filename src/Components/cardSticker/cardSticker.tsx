import { Stiker, Title, Text } from './cardSticker.styled';

type StikerProps = {
  width: string;
  height: string;
  left?: string;
  top?: string;
  zIndex?: number;
  title?: string;
  text?: string;
  fontSize?: string;
  accentColor?: string;
  bgImage?: string;
};

export default function CardSticker({
  width,
  height,
  left,
  top,
  zIndex,
  title,
  text,
  fontSize,
  accentColor,
  bgImage,
}: StikerProps) {
  return (
    <Stiker
      width={width}
      height={height}
      left={left}
      top={top}
      zIndex={zIndex}
      bgImage={bgImage}
    >
      {title && <Title fontSize={fontSize}>{title}</Title>}
      {text && (
        <Text fontSize={fontSize} accentColor={accentColor}>
          {text}
        </Text>
      )}
    </Stiker>
  );
}
