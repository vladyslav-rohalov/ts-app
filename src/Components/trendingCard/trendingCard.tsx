import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { FreeMode, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import './styles.css';
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
const tmpImage = require('../../images/tmpImage.png');

SwiperCore.use([FreeMode, Navigation]);

export default function TrandingCards(): JSX.Element {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[FreeMode, Navigation]}
        resistance={false}
        shortSwipes={false}
      >
        <SwiperSlide>
          <Card>
            <CardImage src={tmpImage} alt="NFT" />
            <NftInfo>
              <TextBlock>
                <NftName>HAPE #8064</NftName>
                <CollectionName>HAPE PRIME</CollectionName>
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
                    <rect
                      width="512"
                      height="512"
                      rx="15%"
                      fill="transparent"
                    ></rect>
                    <path fill="#3C3C3B" d="m256 362v107l131-185z"></path>
                    <path
                      fill="#343434"
                      d="m256 41l131 218-131 78-132-78"
                    ></path>
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
                <Price>32.5 ETH</Price>{' '}
                <PriceEthLabel>FLOOR PRICE</PriceEthLabel>
              </PriceDiv>
              <PriceDiv>
                <Price>58 500$</Price> <PriceUsdLabel>+10%</PriceUsdLabel>
              </PriceDiv>
            </PriceInfo>
            <Button type="button">Collect now</Button>
          </Card>
        </SwiperSlide>
        {/* //////////////////////////////////////// */}
        <SwiperSlide>
          <Card>
            <CardImage src={tmpImage} alt="NFT" />
            <NftInfo>
              <TextBlock>
                <NftName>HAPE #8064</NftName>
                <CollectionName>HAPE PRIME</CollectionName>
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
                    <rect
                      width="512"
                      height="512"
                      rx="15%"
                      fill="transparent"
                    ></rect>
                    <path fill="#3C3C3B" d="m256 362v107l131-185z"></path>
                    <path
                      fill="#343434"
                      d="m256 41l131 218-131 78-132-78"
                    ></path>
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
                <Price>32.5 ETH</Price>{' '}
                <PriceEthLabel>FLOOR PRICE</PriceEthLabel>
              </PriceDiv>
              <PriceDiv>
                <Price>58 500$</Price> <PriceUsdLabel>+10%</PriceUsdLabel>
              </PriceDiv>
            </PriceInfo>
            <Button type="button">Collect now</Button>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card>
            <CardImage src={tmpImage} alt="NFT" />
            <NftInfo>
              <TextBlock>
                <NftName>HAPE #8064</NftName>
                <CollectionName>HAPE PRIME</CollectionName>
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
                    <rect
                      width="512"
                      height="512"
                      rx="15%"
                      fill="transparent"
                    ></rect>
                    <path fill="#3C3C3B" d="m256 362v107l131-185z"></path>
                    <path
                      fill="#343434"
                      d="m256 41l131 218-131 78-132-78"
                    ></path>
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
                <Price>32.5 ETH</Price>{' '}
                <PriceEthLabel>FLOOR PRICE</PriceEthLabel>
              </PriceDiv>
              <PriceDiv>
                <Price>58 500$</Price> <PriceUsdLabel>+10%</PriceUsdLabel>
              </PriceDiv>
            </PriceInfo>
            <Button type="button">Collect now</Button>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card>
            <CardImage src={tmpImage} alt="NFT" />
            <NftInfo>
              <TextBlock>
                <NftName>HAPE #8064</NftName>
                <CollectionName>HAPE PRIME</CollectionName>
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
                    <rect
                      width="512"
                      height="512"
                      rx="15%"
                      fill="transparent"
                    ></rect>
                    <path fill="#3C3C3B" d="m256 362v107l131-185z"></path>
                    <path
                      fill="#343434"
                      d="m256 41l131 218-131 78-132-78"
                    ></path>
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
                <Price>32.5 ETH</Price>{' '}
                <PriceEthLabel>FLOOR PRICE</PriceEthLabel>
              </PriceDiv>
              <PriceDiv>
                <Price>58 500$</Price> <PriceUsdLabel>+10%</PriceUsdLabel>
              </PriceDiv>
            </PriceInfo>
            <Button type="button">Collect now</Button>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card>
            <CardImage src={tmpImage} alt="NFT" />
            <NftInfo>
              <TextBlock>
                <NftName>HAPE #8064</NftName>
                <CollectionName>HAPE PRIME</CollectionName>
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
                    <rect
                      width="512"
                      height="512"
                      rx="15%"
                      fill="transparent"
                    ></rect>
                    <path fill="#3C3C3B" d="m256 362v107l131-185z"></path>
                    <path
                      fill="#343434"
                      d="m256 41l131 218-131 78-132-78"
                    ></path>
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
                <Price>32.5 ETH</Price>{' '}
                <PriceEthLabel>FLOOR PRICE</PriceEthLabel>
              </PriceDiv>
              <PriceDiv>
                <Price>58 500$</Price> <PriceUsdLabel>+10%</PriceUsdLabel>
              </PriceDiv>
            </PriceInfo>
            <Button type="button">Collect now</Button>
          </Card>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
