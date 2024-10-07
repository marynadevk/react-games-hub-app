import { FC } from 'react';
import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo_main.png';
import { ColorModeSwitcher, SearchBar } from './index';

type Props = {
  onSearch: (searchText: string) => void;
};

export const NavBar: FC<Props> = ({ onSearch }) => {
  return (
    <HStack padding="10px" justifyContent="space-between">
      <Image src={logo} boxSize="80px" />
      <SearchBar onSearch={onSearch} />
      <ColorModeSwitcher />
    </HStack>
  );
};
