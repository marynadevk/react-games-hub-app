import usePlatforms from './usePlatforms';

export const useFindPlatform = (id?: number) => {
  const { data: platforms } = usePlatforms();
  return platforms?.results.find((p) => p.id === id);
};
