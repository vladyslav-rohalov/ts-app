import styled from '@emotion/styled';

const bgImage = require('../../images/bayc.avif');

export const HeroLeftDiv = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  max-width: 50%;
`;

export const HeroRightDiv = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  max-width: 50%;
  margin-left: 120px;
`;

export const HeroImage = styled.div`
  width: 516.43px;
  height: 546.91px;
  background: url(${bgImage});
  filter: drop-shadow(16.058px 17.1286px 35.3276px rgba(0, 0, 0, 0.09));
  border-radius: 16.058px;
  transform: matrix(1, 0, -0.18, 0.98, 0, 0);
  z-index: 3;
`;
