import styled from '@emotion/styled';

type RadioProps = {
  bgColor?: string;
  fontSize?: string;
};

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: 2;
`;

export const RadioButtonHiden = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export const RadioButton = styled.span<RadioProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 72px;
  background: ${props => props.bgColor || 'transparent'};
  opacity: 0.9;
  border: 1px solid #ffffff;
  border-radius: 60px;
  cursor: pointer;
  font-family: 'Poppins';
  font-weight: 600;
  font-size: 1.5em;
  line-height: 1.5;
  transition: background 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`;
