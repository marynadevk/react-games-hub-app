import { FC } from 'react';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import { IPlatform } from '../interfaces';
import usePlatforms from '../hooks/usePlatforms';

type Props = {
  onSelectPlatform: (platform: IPlatform) => void;
  selectedPlatform: IPlatform | null;
};

export const PlatformSelector: FC<Props> = ({
  onSelectPlatform,
  selectedPlatform,
}) => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
