import { FC } from 'react';
import { SimpleGrid, Text } from '@chakra-ui/react';
import useGetGames from '../hooks/useGetGames';
import { GameCard, GameCardSkeleton, GameCardContainer } from './index';
import { IGame, IGameQuery } from '../interfaces';

type Props = {
  gameQuery: IGameQuery;
};

export const GameGrid: FC<Props> = ({ gameQuery }) => {
  const { data, error, isLoading } = useGetGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding="10px"
      spacing={6}
    >
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {data.map((game: IGame) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};
