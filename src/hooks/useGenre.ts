import { useState, useEffect } from "react";
import { GameApiClient } from "./useGames";
import { CanceledError } from "axios";

interface Genre {
    id: string;
    name: string;
}

interface FetchReponse {
    count: number;
    genres: Genre[];
}

const useGenre = (endpoint: string) => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        const controller = new AbortController();
        GameApiClient.get<FetchReponse>(endpoint, {
            signal: controller.signal,
        })
            .then(({ data }) => {
                setGenres(data.genres);
                setIsLoading(false);
            })
            .catch((error) => {
                if (error instanceof CanceledError) return;
                setError(error.message);
                setIsLoading(false);
            });

        return () => controller.abort();
    }, []);

    return { genres, isLoading, error };
};

export default useGenre;
