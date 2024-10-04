import { HStack, Image, Text } from '@chakra-ui/react';
import logo from '../assets/logo_main.png';
import { FC } from 'react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

type Props = {
  onSearch?: (searchText: string) => void;
}

const NavBar: FC<Props> = ({ onSearch }) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="80px" />
      <ColorModeSwitcher />
    </HStack>
  );
};

export default NavBar;
