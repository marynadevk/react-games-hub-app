import { FC, ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

type Props = {
  children: ReactNode;
};

export const GameCardContainer: FC<Props> = ({ children }) => {
  return (
    <Box
      borderRadius={10}
      borderWidth={1}
      borderColor="gray.600"
      overflow="hidden"
      _hover={{
        transform: 'scale(1.02)',
        transition: 'transform 0.5s',
        cursor: 'pointer',
      }}
    >
      {children}
    </Box>
  );
};
