import { FC } from 'react';
import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react';
import { IGame } from '../../interfaces/interfaces';
import getCroppedImageUrl from '../../services/image-url';
import { PlatformIconList, CriticScore, Emoji } from '../index';
import { Link } from 'react-router-dom';

type Props = {
  game: IGame;
};

export const GameCard: FC<Props> = ({ game }) => {
  const platforms = game.parent_platforms?.map((p) => p.platform);
  return (
    <Card height="100%">
      <Image src={getCroppedImageUrl(game.background_image)} width="full" />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList platforms={platforms} />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          <Link to={'/games/' + game.slug}>{game.name}</Link>
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};
