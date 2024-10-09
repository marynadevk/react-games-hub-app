import { useQuery } from '@tanstack/react-query';
import ApiClient from '../services/api';
import { IGame } from '../interfaces/interfaces';

const apiClient = new ApiClient<IGame>('/games');

export const useGetGame = (slug: string) =>
  useQuery({
    queryKey: ['games', slug],
    queryFn: () => apiClient.get(slug),
  });
