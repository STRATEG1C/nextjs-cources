'use client';

import styled from 'styled-components';

export const CardContentStyled = styled.div<{ $padding?: string }>`
  padding: ${(props) => props.$padding || '0.625rem'};
`;
