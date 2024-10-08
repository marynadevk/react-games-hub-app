import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo_main.png';
import { ColorModeSwitcher, SearchBar } from './index';


export const NavBar = () => {
  return (
    <HStack padding="10px" justifyContent="space-between">
      <Image src={logo} boxSize="80px" />
      <SearchBar />
      <ColorModeSwitcher />
    </HStack>
  );
};
