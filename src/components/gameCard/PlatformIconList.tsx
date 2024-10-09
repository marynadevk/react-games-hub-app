import { FC } from 'react';
import {
  BsPlaystation,
  BsNintendoSwitch,
  BsWindows,
  BsXbox,
  BsApple,
  BsAndroid2,
  BsGlobe,
} from 'react-icons/bs';
import { FaLinux } from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { HStack, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { IPlatform } from '../../interfaces/interfaces';

type Props = {
  platforms: IPlatform[];
};

export const PlatformIconList: FC<Props> = ({ platforms = [] }) => {
  const iconMap: { [key: string]: IconType } = {
    pc: BsWindows,
    playstation: BsPlaystation,
    xbox: BsXbox,
    nintendo: BsNintendoSwitch,
    mac: BsApple,
    linux: FaLinux,
    android: BsAndroid2,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <HStack
      marginY={1}
      width="100%"
      background="gray.600"
      padding="1.5"
      borderRadius={50}
    >
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color="orange" />
      ))}
    </HStack>
  );
};
