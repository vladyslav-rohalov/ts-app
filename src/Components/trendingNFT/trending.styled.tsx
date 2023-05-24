import styled from '@emotion/styled';
const bgImage = require('../../images/background.png');

export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 600px;
  left: 0;
  top: 850px;
  background: url(${bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  opacity: 0.1;
`;
