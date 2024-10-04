import { Grid, GridItem } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import { useState } from 'react';
import { IGameQuery } from './interfaces';

export const App = () => {
  const [gameQuery, _setGameQuery] = useState<IGameQuery>({} as IGameQuery);
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
      <GridItem area="aside"></GridItem>
      <GridItem area="main">
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
};
