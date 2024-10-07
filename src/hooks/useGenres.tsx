import { useQuery } from '@tanstack/react-query';
import ApiClient from '../services/api';
import genres from '../data/genres';
import { IGenre } from '../interfaces';

const apiClient = new ApiClient<IGenre>('/genres');

const useGenres = () =>
  useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: genres.length, results: genres },
  });

export default useGenres;
