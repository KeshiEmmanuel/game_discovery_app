import { useState, useEffect } from "react";
import axios, { CanceledError } from "axios";
import { Games } from "../types/types";
const GameApiClient = axios.create({
    baseURL: "https://api.rawg.io/api/",
    params: {
        key: "855ce31cff2547b0a26e130700bcacf3",
    },
});

interface FetchResponse {
    count: number;
    results: Games;
}
function useGames(endpoint: string) {
    const [games, setGames] = useState<Games>([]);
    const [error, setError] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const controller = new AbortController();
        GameApiClient.get<FetchResponse>(endpoint, {
            signal: controller.signal,
        })
            .then(({ data }) => {
                setGames(data.results);
                console.log(data);
                setIsLoading(false);
            })
            .catch((error) => {
                if (error instanceof CanceledError) return;
                setError(error.message);
                setIsLoading(false);
            });

        return () => controller.abort();
    }, []);

    return { games, error, isLoading, setGames, setError, setIsLoading };
}

export default useGames;
