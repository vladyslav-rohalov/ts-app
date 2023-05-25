import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: 2;
`;

export const RadioButton = styled.input`
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
  &:before {
    content: '';
    width: 147px;
    height: 72px;
    background: #2f80ed;
    border-radius: 60px;
  }
`;
