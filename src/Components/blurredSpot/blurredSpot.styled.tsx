import styled from '@emotion/styled';

type SpotProps = {
  width: string;
  height: string;
  left: string;
  top: string;
  background: string;
  blur: string;
  rotate: string;
};

export const Spot = styled.div<SpotProps>`
  position: absolute;
  width: ${props => props.width};
  height: ${props => props.height};
  left: ${props => props.left};
  top: ${props => props.top};
  background: rgba(${props => props.background});
  filter: blur(${props => props.blur});
  transform: rotate(${props => props.rotate});
`;
