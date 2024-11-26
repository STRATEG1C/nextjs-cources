import Link from 'next/link';
import { LogoStyled } from './Logo.styled';
import { GameControllerIcon } from '@/shared/icons';

export function Logo() {
  return (
    <LogoStyled>
      <GameControllerIcon />
      <Link href="/">Game Store</Link>
    </LogoStyled>
  );
}
