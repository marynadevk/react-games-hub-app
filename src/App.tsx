import { Button, ButtonGroup, Grid, GridItem } from '@chakra-ui/react';

export const App = () => {
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
      <GridItem area="nav"></GridItem>
      <GridItem area="aside"></GridItem>
      <GridItem area="main"></GridItem>
    </Grid>
  );
};
