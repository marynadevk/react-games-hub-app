import { useQuery } from '@tanstack/react-query';
import ApiClient from '../services/api';
import genres from '../data/genres';
import { IGenre } from '../interfaces/interfaces';
import ms from 'ms';

const apiClient = new ApiClient<IGenre>('/genres');

const useGenres = () =>
  useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: genres,
  });

export default useGenres;
