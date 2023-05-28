import styled from '@emotion/styled/macro';
import { keyframes } from '@emotion/react';

type CardProps = {
  logo?: string;
  cardSize: string;
};

const sizeParams = {
  big: {
    generalWidth: '320px',
    generalGap: '20px',
    cardWidth: '340px',
    cardHeight: '500px',
    cardHeightHovered: '498px',
    cardPadding: '20px',
    imageHeight: '400px',
    imageHeightHovered: '280px',
    btnHeight: '40px',
    btnBR: '60px',
    btnFS: '1em',
    infoHeight: '64px',
    nftNameFS: '1.38em',
    collectionNameFS: '0.81em',
    logoWidth: '45px',
    logoHeight: '45px',
    priceInfoGap: '40px',
    priceInfoHeight: '56px',
    priceFS: '1.25em',
    priceLabelFS: '0.81em',
  },
  small: {
    generalWidth: '240px',
    generalGap: '20px',
    cardWidth: '260px',
    cardHeight: '400px',
    cardHeightHovered: '398px',
    cardPadding: '16px',
    imageHeight: '240px',
    imageHeightHovered: '180px',
    btnHeight: '32px',
    btnBR: '48px',
    btnFS: '0.8em',
    infoHeight: '48px',
    nftNameFS: '1em',
    collectionNameFS: '0.7em',
    logoWidth: '36px',
    logoHeight: '36px',
    priceInfoGap: '32px',
    priceInfoHeight: '48px',
    priceFS: '1em',
    priceLabelFS: '0.7em',
  },
};

const glowing = keyframes`
0% { background-position: 0 0; }
50% { background-position: 400% 0; }
100% { background-position: 0 0; }
`;

export const Button = styled.button<CardProps>`
  width: ${props =>
    props.cardSize === 'small'
      ? sizeParams.small.generalWidth
      : sizeParams.big.generalWidth};
  height: ${props =>
    props.cardSize === 'small'
      ? sizeParams.small.btnHeight
      : sizeParams.big.btnHeight};
  background: #2f80ed;
  color: #ffffff;
  border-style: none;
  border-radius: ${props =>
    props.cardSize === 'small' ? sizeParams.small.btnBR : sizeParams.big.btnBR};
  cursor: pointer;
  font-weight: 600;
  font-size: ${props =>
    props.cardSize === 'small' ? sizeParams.small.btnFS : sizeParams.big.btnFS};
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
    border-radius: ${props =>
      props.cardSize === 'small'
        ? sizeParams.small.btnBR
        : sizeParams.big.btnBR};
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
    border-radius: ${props =>
      props.cardSize === 'small'
        ? sizeParams.small.btnBR
        : sizeParams.big.btnBR};
  }
`;

export const CardImage = styled.img<CardProps>`
  width: ${props =>
    props.cardSize === 'small'
      ? sizeParams.small.generalWidth
      : sizeParams.big.generalWidth};
  height: ${props =>
    props.cardSize === 'small'
      ? sizeParams.small.imageHeight
      : sizeParams.big.imageHeight};
  border-radius: 15px;
  object-fit: cover;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Card = styled.div<CardProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: ${props =>
    props.cardSize === 'small'
      ? sizeParams.small.cardWidth
      : sizeParams.big.cardWidth};
  height: ${props =>
    props.cardSize === 'small'
      ? sizeParams.small.cardHeight
      : sizeParams.big.cardHeight};
  padding: ${props =>
    props.cardSize === 'small'
      ? sizeParams.small.cardPadding
      : sizeParams.big.cardPadding};
  gap: ${props =>
    props.cardSize === 'small'
      ? sizeParams.small.generalGap
      : sizeParams.big.generalGap};
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
      height: ${props =>
        props.cardSize === 'small'
          ? sizeParams.small.imageHeightHovered
          : sizeParams.big.imageHeightHovered};
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
    height: ${props =>
      props.cardSize === 'small'
        ? sizeParams.small.cardHeightHovered
        : sizeParams.big.cardHeightHovered};
  }
`;

export const NftInfo = styled.div<CardProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: ${props =>
    props.cardSize === 'small'
      ? sizeParams.small.generalGap
      : sizeParams.big.generalGap};
  width: $
    ${props =>
      props.cardSize === 'small'
        ? sizeParams.small.generalWidth
        : sizeParams.big.generalWidth};
  max-height: ${props =>
    props.cardSize === 'small'
      ? sizeParams.small.infoHeight
      : sizeParams.big.infoHeight};
  background: url(${props => props.logo});
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

export const NftName = styled.p<CardProps>`
  display: flex;
  align-items: center;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: ${props =>
    props.cardSize === 'small'
      ? sizeParams.small.nftNameFS
      : sizeParams.big.nftNameFS};
  line-height: 1.5;
  color: #6a58f1;
  margin: 0;
`;

export const CollectionName = styled.p<CardProps>`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: ${props =>
    props.cardSize === 'small'
      ? sizeParams.small.collectionNameFS
      : sizeParams.big.collectionNameFS};
  line-height: 1.5;
  display: flex;
  align-items: center;
  color: #ffffff;
  opacity: 0.7;
  margin: 0;
`;

export const LogoContainer = styled.div<CardProps>`
  width: ${props =>
    props.cardSize === 'small'
      ? sizeParams.small.logoWidth
      : sizeParams.big.logoWidth};
  height: ${props =>
    props.cardSize === 'small'
      ? sizeParams.small.logoHeight
      : sizeParams.big.logoHeight};
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
`;

export const PriceInfo = styled.div<CardProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: ${props =>
    props.cardSize === 'small'
      ? sizeParams.small.priceInfoGap
      : sizeParams.big.priceInfoGap};
  width: ${props =>
    props.cardSize === 'small'
      ? sizeParams.small.generalWidth
      : sizeParams.big.generalWidth};
  height: ${props =>
    props.cardSize === 'small'
      ? sizeParams.small.priceInfoHeight
      : sizeParams.big.priceInfoHeight};
  padding: 0px 3px;
`;

export const Price = styled.p<CardProps>`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: ${props =>
    props.cardSize === 'small'
      ? sizeParams.small.priceFS
      : sizeParams.big.priceFS};
  line-height: 1.5;
  margin: 0;
`;

export const PriceDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PriceEthLabel = styled.p<CardProps>`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: $
    ${props =>
      props.cardSize === 'small'
        ? sizeParams.small.priceLabelFS
        : sizeParams.big.priceLabelFS};
  line-height: 1.5;
  display: flex;
  align-items: center;
  color: #ffffff;
  opacity: 0.7;
  margin: 0 auto;
`;

export const PriceUsdLabel = styled.p<CardProps>`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: ${props =>
    props.cardSize === 'small'
      ? sizeParams.small.priceLabelFS
      : sizeParams.big.priceLabelFS};
  line-height: 1.5;
  display: flex;
  align-items: center;
  color: #24ff00;
  margin: 0 auto;
`;
