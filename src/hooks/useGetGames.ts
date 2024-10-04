import { useEffect, useState } from 'react';
import { IGame, IGameQuery } from '../interfaces';
import { CanceledError } from 'axios';
import useData from './useData';

const useGetGames = (gameQuery: IGameQuery) =>
  useData<IGame>(
    '/games',
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    },
    [gameQuery]
  );

export default useGetGames;
