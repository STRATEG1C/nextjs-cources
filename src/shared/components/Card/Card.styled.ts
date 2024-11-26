'use client';

import styled from 'styled-components';

export const CardStyled = styled.div<{ $width?: string }>`
  width: ${({ $width }) => `calc(${$width} - 20px)` || '100%'};
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  background-color: #384351;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;
