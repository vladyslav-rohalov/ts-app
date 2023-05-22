import styled from '@emotion/styled';

type SubstrateProps = {
  width: string;
  height: string;
  left: string;
  top: string;
};

export const Substrate = styled.div<SubstrateProps>`
  position: absolute;
  width: ${props => props.width};
  height: ${props => props.height};
  left: ${props => props.left};
  top: ${props => props.top};
  background: linear-gradient(
    155.14deg,
    rgba(255, 255, 255, 0) -2.13%,
    rgba(255, 255, 255, 0.15) 136.58%
  );
  filter: drop-shadow(0px 4.28214px 52.4562px rgba(0, 7, 72, 0.12));
  backdrop-filter: blur(13.3817px);
  border-radius: 21.4107px;
  transform: matrix(1, 0, -0.18, 0.98, 0, 0);
  border: 1px solid white;
`;
