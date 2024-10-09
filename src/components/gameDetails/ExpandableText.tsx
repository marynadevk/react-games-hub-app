import { Button, Text } from '@chakra-ui/react';
import { FC, useState } from 'react';

type Props = {
  children: string;
};
const LIMIT = 300;

export const ExpandableText: FC<Props> = ({ children }) => {
  const [expanded, setExpanded] = useState(false);

  if (!children) return null;
  if (children.length <= LIMIT) return <Text>{children}</Text>;

  const summary = expanded ? children : children.substring(0, LIMIT) + '...';
  return (
    <Text>
      {summary}
      <Button
        size="xs"
        marginLeft={1}
        fontWeight="bold"
        colorScheme="yellow"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? 'Show Less' : 'Read More'}
      </Button>
    </Text>
  );
};
