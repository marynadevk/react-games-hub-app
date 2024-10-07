import { Heading } from '@chakra-ui/react';
import { IGameQuery } from '../interfaces';
import { FC } from 'react';

type Props = {
  gameQuery: IGameQuery;
};

export const GameHeading: FC<Props> = ({ gameQuery }) => {
  const heading = `${gameQuery.platform?.name || ''} ${
    gameQuery.genre?.name || ''
  } Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};
