import styled from '@emotion/styled';

type StikerProps = {
  width: string;
  height: string;
  left?: string;
  top?: string;
  zIndex?: number;
  bgImage?: string;
};

type TextProps = {
  title?: string;
  text?: string;
  fontSize?: string;
  accentColor?: string;
};

export const Stiker = styled('div')<StikerProps>(
  {
    position: 'absolute',
    display: 'flex',
    gap: '8px',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundPosition: 'left',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    filter: `drop-shadow(0px 4.28214px 52.4562px rgba(0, 7, 72, 0.12))`,
    backdropFilter: 'blur(13.3817px)',
    borderRadius: '22px',
    transform: 'matrix(1, 0, -0.18, 0.98, 0, 0)',
    border: '1px solid #ffffff',
    textAlign: 'center',
  },
  props => ({
    width: props.width,
    height: props.height,
    left: props.left || 0,
    top: props.top || 0,
    zIndex: props.zIndex || 1,
    backgroundImage: `url('${props.bgImage}'), linear-gradient(155.14deg,
      rgba(255, 255, 255, 0) -2.13%,
      rgba(255, 255, 255, 0.15) 136.58%)`,
  })
);

export const Title = styled.p<TextProps>`
  font-family: 'Clash Display';
  font-style: normal;
  font-weight: 600;
  font-size: ${props => props.fontSize || '1.3em'};
  line-height: 1.23;
  margin: 0 auto;
`;

export const Text = styled.p<TextProps>`
  font-family: 'Clash Display';
  font-style: normal;
  font-weight: 500;
  font-size: ${props => props.fontSize || '1em'};
  color: ${props => props.accentColor || '#ffffff'};
  line-height: 1.1;
  margin: 0 auto;
`;
