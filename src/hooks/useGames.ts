import { useState, useEffect } from "react";
import axios from "axios";
import { Games } from "../types/types";
const GameApiClient = axios.create({
    baseURL: "https://rawg.io",
});

interface FetchResponse {
    count: number;
    results: Games;
}
function UseGames(endpoint: string) {
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
                setError(error.message);
                setIsLoading(false);
            });

        return () => controller.abort();
    });

    return { games, error, isLoading, setGames, setError, setIsLoading };
}

export default UseGames;
