import { FC } from 'react';
import { SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import useGetGames from '../hooks/useGetGames';
import { GameCard, GameCardSkeleton, GameCardContainer } from './index';
import { IGame, IGameQuery } from '../interfaces';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

type Props = {
  gameQuery: IGameQuery;
};

export const GameGrid: FC<Props> = ({ gameQuery }) => {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
  } = useGetGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error.message}</Text>;
  const amountOfFetchedGames =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <InfiniteScroll
      dataLength={amountOfFetchedGames}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={<Spinner />}
    >
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
        {data?.pages.map((page, i) => (
          <React.Fragment key={i}>
            {page.results.map((game: IGame) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
};
