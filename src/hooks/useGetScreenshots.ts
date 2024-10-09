import { useQuery } from '@tanstack/react-query';
import ApiClient from '../services/api';
import { IScreenshot } from '../interfaces/interfaces';

export const useGetScreenshots = (gameId: number) => {
  const apiClient = new ApiClient<IScreenshot>(`/games/${gameId}/screenshots`);

  return useQuery({
    queryKey: ['screenshots', gameId],
    queryFn: apiClient.getAll,
  });
};
