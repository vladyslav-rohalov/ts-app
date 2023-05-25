import styled from '@emotion/styled/macro';
import { keyframes } from '@emotion/react';

const glowing = keyframes`
0% { background-position: 0 0; }
50% { background-position: 400% 0; }
100% { background-position: 0 0; }
`;

type ButtonProps = {
  width: string;
  height: string;
  bgColor: string;
  color?: string;
  fontSize?: string;
};

export const ButtonStyled = styled.button<ButtonProps>`
  position: relative;
  width: ${props => props.width};
  height: ${props => props.height};
  background: ${props => props.bgColor};
  color: ${props => props.color || '#ffffff'};
  border-style: none;
  border-radius: 60px;
  border: 1px solid #ffffff;
  cursor: pointer;
  font-weight: 600;
  font-size: ${props => props.fontSize || '1em'};
  line-height: 1.5;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  margin: 64px auto 0;
  opacity: 0.9;
  z-index: 2;

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
    background: ${props => props.bgColor};
    left: 0;
    top: 0;
    border-radius: 60px;
  }
`;
