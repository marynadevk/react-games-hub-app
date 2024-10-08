export interface IGame {
  id: number;
  name: string;
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

export interface IGameQuery { 
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}