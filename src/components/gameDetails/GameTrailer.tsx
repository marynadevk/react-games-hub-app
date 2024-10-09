import { FC } from 'react';
import { useGetTrailers } from '../../hooks/useGetTrailers';

type Props = {
  gameId: number;
};

export const GameTrailer: FC<Props> = ({ gameId }) => {
  const { data: trailers, error, isLoading } = useGetTrailers(gameId);
  if (isLoading) return null;

  if (error) throw error;
  const first = trailers?.results[0];

  return first ? (
    <video src={first.data[480]} poster={first.preview} controls />
  ) : null;
};
