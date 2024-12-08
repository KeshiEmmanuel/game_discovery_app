import { useState, useEffect } from "react";

const GameApiClient = axios.create({
    baseURL: "https://rawg.io",
});
function UseGames<T>(endpoint: string) {
    const [games, setGames] = useState<T[]>([]);
    const [error, setError] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const controller = new AbortController();
        GameApiClient.get<T>(endpoint, {
            signal: controller.signal,
        })
            .then(({ data }) => {
                setGames(data);
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
