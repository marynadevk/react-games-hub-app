import { FC } from 'react';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import { IPlatform } from '../interfaces';
import usePlatforms from '../hooks/usePlatforms';
import { useFindPlatform } from '../hooks/useFindPlatform';

type Props = {
  onSelectPlatform: (platform: IPlatform) => void;
  selectedPlatformId?: number;
};

export const PlatformSelector: FC<Props> = ({
  onSelectPlatform,
  selectedPlatformId,
}) => {
  const { data, error } = usePlatforms();
  const selectedPlatform = useFindPlatform(selectedPlatformId);

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
