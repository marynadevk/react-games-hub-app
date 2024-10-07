import cool from '../../assets/cool.png';
import love from '../../assets/inLove.png'; 
import meh from '../../assets/meh.png';
import { Image, ImageProps } from '@chakra-ui/react';
import { FC } from 'react';

type Props = {
  rating: number;
};

export const Emoji: FC<Props> = ({ rating }) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: 'meh', boxSize: '30px' },
    4: { src: cool, alt: 'recommended', boxSize: '35px' },
    5: { src: love, alt: 'exceptional', boxSize: '35px' },
  };

  return <Image {...emojiMap[rating]} marginTop={1} />;
};
