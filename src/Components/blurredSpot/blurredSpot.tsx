import { Spot } from './blurredSpot.styled';

type SpotProps = {
  width: string;
  height: string;
  left?: string;
  top?: string;
  background: string;
  blur: string;
  rotate: string;
};

export default function BlurredSpot({
  width,
  height,
  left,
  top,
  background,
  blur,
  rotate,
}: SpotProps) {
  return (
    <Spot
      width={width}
      height={height}
      left={left}
      top={top}
      background={background}
      blur={blur}
      rotate={rotate}
    />
  );
}
