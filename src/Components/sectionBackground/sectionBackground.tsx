import { Background } from './sectionBackground.styled';

type PropsImage = {
  image: string;
  top: string;
};

export default function SectionBackground({ image, top }: PropsImage) {
  return <Background image={image} top={top} />;
}
