import { Substrate } from './cardSubstrate.styled';

type SubstrateProps = {
  width: string;
  height: string;
  left: string;
  top: string;
};

export default function CardSubstrate({
  width,
  height,
  left,
  top,
}: SubstrateProps) {
  return <Substrate width={width} height={height} left={left} top={top} />;
}
