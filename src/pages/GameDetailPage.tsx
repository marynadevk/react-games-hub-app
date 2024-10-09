import { useParams } from 'react-router-dom';
import { useGetGame } from '../hooks/useGetGame';
import { GridItem, Heading, SimpleGrid, Spinner } from '@chakra-ui/react';
import {
  GameAttributes,
  ExpandableText,
  GameTrailer,
  GameScreenshots,
} from '../components';

export const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGetGame(slug as string);

  if (isLoading) return <Spinner />;
  if (error || !game) throw new Error('Error fetching game');

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Heading>{game.name}</Heading>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GameAttributes game={game} />
      </GridItem>
      <GridItem>
        <GameTrailer gameId={game.id} />
        <GameScreenshots gameId={game.id} />
      </GridItem>
    </SimpleGrid>
  );
};
