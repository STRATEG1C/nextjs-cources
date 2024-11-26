import { HeaderStyled } from '@/app/_components/Header/Header.styled';
import { Logo, Container } from '@/shared/components';

export function Header() {
  return (
    <HeaderStyled>
      <Container>
        <Logo />
      </Container>
    </HeaderStyled>
  );
}
