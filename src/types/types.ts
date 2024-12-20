export interface Platform {
    id: number;
    name: string;
    slug: string;
}
export type Game = {
    id: number;
    slug: string;
    name: string;
    tba: boolean;
    rating_top: number;
    playtime: number;
    released: string;
    metacritic: number;
    rating: number;
    background_image: string;
    parent_platforms: { platform: Platform }[];
};
export interface Genre {
    id: number;
    name: string;
    image_background: string;
}
export interface GameQuery {
    genre: Genre | null;
    platform: Platform | null;
    searchString: string;
    sortOrder: string;
}
export type GameDetails = {
    id: number;
    slug: string;
    name: string;
    tba: boolean;
    rating_count: number;
    playtime: number;
    released: string;
    metacritic: number;
    rating: number;
    background_image: string;
    parent_platforms: { platform: Platform }[];
};

export type Games = Game[];
