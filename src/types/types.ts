export type Game = {
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
};

export type Games = Game[];
