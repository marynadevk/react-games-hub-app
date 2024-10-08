import { Heading } from '@chakra-ui/react';
import { useFindPlatform } from '../hooks/useFindPlatform';
import { useFindGenre } from '../hooks/useFindGenre';
import { useGameQueryStore } from '../store';

export const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useFindGenre(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = useFindPlatform(platformId);

  const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};
