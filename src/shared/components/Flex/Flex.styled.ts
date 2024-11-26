'use client';

import styled from 'styled-components';

export const FlexStyled = styled.div<{
  $justify?:
    | 'center'
    | 'start'
    | 'end'
    | 'flex-start'
    | 'flex-end'
    | 'left'
    | 'right'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  $align?: 'center' | 'start' | 'end' | 'flex-start' | 'flex-end';
}>`
  display: flex;
  justify-content: ${(props) => props.$justify || 'flex-start'};
  flex-wrap: wrap;
  gap: 20px;
`;
