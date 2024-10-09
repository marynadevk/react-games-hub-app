import { Link } from 'react-router-dom';
import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo_main.png';
import { ColorModeSwitcher, SearchBar } from './index';

export const NavBar = () => {
  return (
    <HStack padding="10px" flexGrow={1}>
      <Link to="/">
        <Image src={logo} objectFit="contain" boxSize="80px" />
      </Link>
      <SearchBar />
      <ColorModeSwitcher />
    </HStack>
  );
};
