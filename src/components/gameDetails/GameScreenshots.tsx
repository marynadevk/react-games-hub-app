import { Image, SimpleGrid } from '@chakra-ui/react';
import { useGetScreenshots } from '../../hooks/useGetScreenshots';
import { FC } from 'react';

type Props = {
  gameId: number;
};

export const GameScreenshots: FC<Props> = ({ gameId }) => {
  const { data, isLoading, error } = useGetScreenshots(gameId);

  if (isLoading) return null;
  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {data?.results.map((file) => (
        <Image key={file.id} src={file.image} />
      ))}
    </SimpleGrid>
  );
};
