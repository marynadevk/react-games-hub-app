import { useState } from 'react';
import { Box, Flex, Grid, GridItem, Show } from '@chakra-ui/react';

import {
  PlatformSelector,
  SortSelector,
  GenreList,
  GameHeading,
  NavBar,
  GameGrid,
} from './components';
import { useGameQueryStore } from './store';

export const App = () => {
  const {} = useGameQueryStore();


  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '250px 1fr',
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading />
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector />
            </Box>
            <SortSelector />
          </Flex>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};
