import { Card, CardBody, Heading, HStack, Image, Text } from '@chakra-ui/react';
import { IGame } from '../interfaces';
import { FC } from 'react';
import getCroppedImageUrl from '../services/image-url';
import PlatformIconList from './PlatformIconList';

type Props = {
  game: IGame;
};

const GameCard: FC<Props> = ({ game }) => {
  const platforms = game.parent_platforms?.map((p) => p.platform);
  return (
    <Card>
      <CardBody>
        <Image src={getCroppedImageUrl(game.background_image)} />
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList platforms={platforms} />
        </HStack>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
