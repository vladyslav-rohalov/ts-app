import {
  Card,
  ImageContainer,
  CardImage,
  NftInfo,
  TextBlock,
  NftName,
  CollectionName,
  LogoContainer,
  PriceInfo,
  PriceChangeLabel,
  PriceChange,
  PriceUsd,
  PriceDiv,
  Button,
  BgImage,
} from './nftCard.styled';
import ChainLogo from 'Components/chainLogo/chainLogo';
import { switchTicker } from 'utils/switchChain';

type NftProps = {
  image: string;
  name?: string;
  collection: string;
  logo?: string;
  titleButton: string;
  priceUsd: string;
  priceCrypto: number;
  priceChange: string;
  cardSize: string;
  chainName: string;
};

export default function NftCard({
  image,
  name,
  collection,
  priceCrypto,
  priceUsd,
  priceChange,
  logo,
  titleButton,
  cardSize,
  chainName,
}: NftProps) {
  const priceChangeColor = (): string | undefined => {
    if (priceChange === null) return;
    if (priceChange[0] === '-') {
      return '#FF0000';
    } else {
      return '#24ff00';
    }
  };

  return (
    <Card cardSize={cardSize}>
      <ImageContainer cardSize={cardSize}>
        <CardImage src={image} alt="NFT" cardSize={cardSize} />
      </ImageContainer>

      <NftInfo cardSize={cardSize}>
        {cardSize === 'big' && <BgImage logo={logo} />}
        <TextBlock>
          {cardSize === 'big' && <NftName cardSize={cardSize}>{name}</NftName>}
          <CollectionName cardSize={cardSize}>{collection}</CollectionName>
        </TextBlock>
        <LogoContainer cardSize={cardSize}>
          <ChainLogo chainName={chainName} />
        </LogoContainer>
      </NftInfo>
      <PriceInfo cardSize={cardSize}>
        <PriceDiv>
          <PriceUsd cardSize={cardSize}>
            {priceCrypto} {switchTicker(chainName)}
          </PriceUsd>{' '}
          <PriceChangeLabel cardSize={cardSize}>PRICE CHANGE</PriceChangeLabel>
        </PriceDiv>
        <PriceDiv>
          <PriceUsd cardSize={cardSize}>{priceUsd}$</PriceUsd>{' '}
          <PriceChange cardSize={cardSize} color={priceChangeColor()}>
            {priceChange}
          </PriceChange>
        </PriceDiv>
      </PriceInfo>
      <Button type="button" cardSize={cardSize}>
        {titleButton}
      </Button>
    </Card>
  );
}
