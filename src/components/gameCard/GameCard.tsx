import { FC } from 'react';
import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react';
import { IGame } from '../../interfaces';
import getCroppedImageUrl from '../../services/image-url';
import { PlatformIconList, CriticScore, Emoji } from '../index';

type Props = {
  game: IGame;
};

export const GameCard: FC<Props> = ({ game }) => {
  const platforms = game.parent_platforms?.map((p) => p.platform);
  return (
    <Card height="100%">
      <CardBody>
        <Image src={getCroppedImageUrl(game.background_image)} />
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList platforms={platforms} />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          {game.name}
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};
