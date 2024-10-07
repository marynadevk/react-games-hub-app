import { Card, CardBody, Heading, HStack, Image, Text } from '@chakra-ui/react';
import { IGame } from '../../interfaces';
import { FC } from 'react';
import getCroppedImageUrl from '../../services/image-url';
import PlatformIconList from './PlatformIconList';
import { CriticScore } from './CriticScore';

type Props = {
  game: IGame;
};

const GameCard: FC<Props> = ({ game }) => {
  const platforms = game.parent_platforms?.map((p) => p.platform);
  return (
    <Card height="100%">
      <CardBody>
        <Image src={getCroppedImageUrl(game.background_image)} />
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList platforms={platforms} />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
