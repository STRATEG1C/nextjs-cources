import { GamesListStyled } from '@/app/_components/GamesList/GamesList.styled';
import { Box } from '@/shared/components/Box';
import { GameCard } from '@/app/_components/GameCard';
import { getGamesList } from '@/app/_actions/getGamesList';

export async function GamesList() {
  const games = await getGamesList();

  return (
    <Box>
      <h3>Games List</h3>
      <GamesListStyled>
        {games.map((item) => (
          <GameCard
            key={item.id}
            title={item.title}
            price={item.price}
            imageUrl={item.imageUrl}
          />
        ))}
      </GamesListStyled>
    </Box>
  );
}
