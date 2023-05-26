import {
  Card,
  CardImage,
  NftInfo,
  TextBlock,
  NftName,
  CollectionName,
  LogoContainer,
  PriceInfo,
  PriceEthLabel,
  PriceUsdLabel,
  Price,
  PriceDiv,
  Button,
} from './trendingCard.styled';

type NftProps = {
  image: string;
  name: string;
  collection: string;
  logo: string;
  titleButton: string;
  priceEth: number;
  priceUsd: number;
  priceChange: number;
};

export default function TrandingCard({
  image,
  name,
  collection,
  priceEth,
  priceUsd,
  priceChange,
  logo,
  titleButton,
}: NftProps) {
  return (
    <Card>
      <CardImage src={image} alt="NFT" />
      <NftInfo logo={logo}>
        <TextBlock>
          <NftName>{name}</NftName>
          <CollectionName>{collection}</CollectionName>
        </TextBlock>
        <LogoContainer>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Ethereum"
            role="img"
            viewBox="0 0 512 512"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <rect width="512" height="512" rx="15%" fill="transparent"></rect>
              <path fill="#3C3C3B" d="m256 362v107l131-185z"></path>
              <path fill="#343434" d="m256 41l131 218-131 78-132-78"></path>
              <path
                fill="#8C8C8C"
                d="m256 41v158l-132 60m0 25l132 78v107"
              ></path>
              <path fill="#141414" d="m256 199v138l131-78"></path>
              <path fill="#393939" d="m124 259l132-60v138"></path>
            </g>
          </svg>
        </LogoContainer>
      </NftInfo>
      <PriceInfo>
        <PriceDiv>
          <Price>{priceEth} ETH</Price>{' '}
          <PriceEthLabel>FLOOR PRICE</PriceEthLabel>
        </PriceDiv>
        <PriceDiv>
          <Price>{priceUsd}$</Price>{' '}
          <PriceUsdLabel>+{priceChange}%</PriceUsdLabel>
        </PriceDiv>
      </PriceInfo>
      <Button type="button">{titleButton}</Button>
    </Card>
  );
}
