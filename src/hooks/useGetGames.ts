import { IGame, IGameQuery } from '../interfaces';
import ApiClient, { FetchResponse } from '../services/api';
import { useQuery } from '@tanstack/react-query';

const apiClient = new ApiClient<IGame>('/games');

const useGames = (gameQuery: IGameQuery) =>
  useQuery<FetchResponse<IGame>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      }),
  });

export default useGames;