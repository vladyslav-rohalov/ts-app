import styled from '@emotion/styled';

type PropsImage = {
  image: string;
  top: string;
};

export const Background = styled.div<PropsImage>`
  position: absolute;
  width: 100%;
  height: 600px;
  left: 0;
  top: ${props => props.top};
  background: url(${props => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  opacity: 0.1;
`;
