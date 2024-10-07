import { FC } from 'react';
import { Heading } from '@chakra-ui/react';
import { IGameQuery } from '../interfaces';

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
