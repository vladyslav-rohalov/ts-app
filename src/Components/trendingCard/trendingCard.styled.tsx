import styled from '@emotion/styled/macro';
import { keyframes } from '@emotion/react';
const tmpCollectionLogo = require('../../images/BORED.avif');

const glowing = keyframes`
0% { background-position: 0 0; }
50% { background-position: 400% 0; }
100% { background-position: 0 0; }
`;

export const Button = styled.button`
  width: 320px;
  height: 40px;
  background: #2f80ed;
  color: #ffffff;
  border-style: none;
  border-radius: 60px;
  cursor: pointer;
  font-weight: 600;
  font-size: 1em;
  line-height: 1.5;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform: scale(0.1);
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 1px);
    height: calc(100% + 1px);
    animation: ${glowing} 20s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: 60px;
  }
  &:active:after {
    background: transparent;
  }
  &:hover:before {
    opacity: 1;
  }
  &:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #2f80ed;
    left: 0;
    top: 0;
    border-radius: 60px;
  }
`;

export const CardImage = styled.img`
  width: 320px;
  height: 400px;
  border-radius: 15px;
  object-fit: cover;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 340px;
  height: 500px;
  padding: 20px;
  gap: 20px;
  user-select: none;
  background: linear-gradient(
    155.14deg,
    rgba(255, 255, 255, 0) -2.13%,
    rgba(255, 255, 255, 0.15) 136.58%
  );
  filter: drop-shadow(0px 4px 49px rgba(0, 7, 72, 0.12));
  backdrop-filter: blur(12.5px);
  border-radius: 20px;
  &:hover {
    ${Button} {
      opacity: 1;
      pointer-events: auto;
      transform: scale(1);
    }
    ${CardImage} {
      height: 280px;
    }
    background: linear-gradient(#3d2c71, #3d2c71) padding-box,
      linear-gradient(
          90deg,
          rgba(105, 234, 203, 1) 0%,
          rgba(234, 204, 248, 1) 50%,
          rgba(102, 84, 241, 1) 100%
        )
        border-box;
    border-radius: 20px;
    border: 1px solid transparent;
    height: 498px;
  }
`;

export const NftInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 20px;
  width: 320px;
  height: 64px;
  background: url(${tmpCollectionLogo});
  background-position: left;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  gap: 5px;
  margin-left: 80px;
`;

export const NftName = styled.p`
  display: flex;
  align-items: center;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 1.38em;
  line-height: 1.5;
  color: #6a58f1;
  margin: 0;
`;

export const CollectionName = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 0.81em;
  line-height: 1.5;
  display: flex;
  align-items: center;
  color: #ffffff;
  opacity: 0.7;
  margin: 0;
`;

export const LogoContainer = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
`;

export const PriceInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
  width: 320px;
  height: 56px;
  padding: 0px 3px;
`;

export const Price = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 1.25em;
  line-height: 1.5;
  margin: 0;
`;

export const PriceDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PriceEthLabel = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 0.81em;
  line-height: 1.5;
  display: flex;
  align-items: center;
  color: #ffffff;
  opacity: 0.7;
  margin: 0 auto;
`;

export const PriceUsdLabel = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 0.81em;
  line-height: 1.5;
  display: flex;
  align-items: center;
  color: #24ff00;
  margin: 0 auto;
`;
