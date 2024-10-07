import { useInfiniteQuery } from '@tanstack/react-query';
import { IGame, IGameQuery } from '../interfaces';
import ApiClient, { FetchResponse } from '../services/api';

const apiClient = new ApiClient<IGame>('/games');

const useGames = (gameQuery: IGameQuery) =>
  useInfiniteQuery<FetchResponse<IGame>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1,
    staleTime: 24 * 60 * 60 * 1000, //24 hours
  });

export default useGames;
