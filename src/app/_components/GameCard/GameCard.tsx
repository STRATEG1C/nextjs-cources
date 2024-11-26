import { CardContent, CardFooter } from '@/shared/components/Card';
import Image from 'next/image';
import { Flex } from '@/shared/components/Flex';
import { GameCardStyled } from '@/app/_components/GameCard/GameCard.styled';

interface GameCardProps {
  title: string;
  price: number;
  imageUrl: string;
}

export function GameCard({ title, price, imageUrl }: GameCardProps) {
  return (
    <GameCardStyled $width="25%">
      <CardContent $padding="0">
        <Image src={imageUrl} alt={title} width={320} height={180} />
      </CardContent>
      <CardFooter>
        <Flex $justify="space-between" $align="center">
          <div>{title}</div>
          <div>{price}$</div>
        </Flex>
      </CardFooter>
    </GameCardStyled>
  );
}
