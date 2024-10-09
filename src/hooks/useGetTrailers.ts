import { useQuery } from '@tanstack/react-query';
import { ITrailer } from '../interfaces/interfaces';
import ApiClient from '../services/api';

export const useGetTrailers = (gameId: number) => {
  const apiClient = new ApiClient<ITrailer>(`/games/${gameId}/movies`);

  return useQuery({
    queryKey: ['trailers', gameId],
    queryFn: apiClient.getAll,
  });
};
