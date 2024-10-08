import { FC } from 'react';
import { Heading } from '@chakra-ui/react';
import { IGameQuery } from '../interfaces';
import { useFindPlatform } from '../hooks/useFindPlatform';
import { useFindGenre } from '../hooks/useFindGenre';

type Props = {
  gameQuery: IGameQuery;
};

export const GameHeading: FC<Props> = ({ gameQuery }) => {
  const genre = useFindGenre(gameQuery.genreId);
  const platform = useFindPlatform(gameQuery.platformId);
  
  const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};
