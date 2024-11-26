'use client';

import { Card } from '@/shared/components/Card';
import styled from 'styled-components';

export const GameCardStyled = styled(Card)`
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.6);
    transform: scale(1.01);
  }
`;
