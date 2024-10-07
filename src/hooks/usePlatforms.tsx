import { useQuery } from '@tanstack/react-query';
import platforms from '../data/platforms';
import ApiClient from '../services/api';
import { IPlatform } from '../interfaces';

const apiClient = new ApiClient<IPlatform>('/platforms/lists/parents');

const usePlatforms = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24h,
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
