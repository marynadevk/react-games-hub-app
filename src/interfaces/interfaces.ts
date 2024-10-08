export interface IGame {
  id: number;
  name: string;
  slug: string;
  genres: IGenre[];
  publishers: IPublisher[];
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: IPlatform }[];
  metacritic: number;
  rating_top: number;
}

export interface IPlatform {
  id: number;
  name: string;
  slug: string;
}

export interface IGenre {
  id: number;
  name: string;
  image_background: string;
}

export interface IPublisher {
  id: number;
  name: string;
}

export interface ITrailer {
  id: number;
  name: string;
  preview: string;
  data: { 480: string; max: string };
}

export interface IScreenshot {
  id: number;
  image: string;
  width: number;
  height: number;
}
