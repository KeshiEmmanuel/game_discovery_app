import { AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState } from "react";
import { GameApiClient } from "../services/api-client";

interface FetchResponse<T> {
    count: number;
    results: T[];
}

export default function useData<T>(
    endpoint: string,
    responseConfig?: AxiosRequestConfig,
    deps?: any[]
) {
    const [data, setData] = useState<T[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    useEffect(
        () => {
            const controller = new AbortController();

            GameApiClient.get<FetchResponse<T>>(endpoint, {
                signal: controller.signal,
                ...responseConfig,
            })
                .then((response) => {
                    setData(response.data.results);
                    setIsLoading(false);
                })
                .catch((error) => {
                    if (error instanceof CanceledError) return;
                    setError(error.message);
                    setIsLoading(false);
                });
            return () => controller.abort();
        },
        deps ? [...deps] : []
    );

    return { data, isLoading, error };
}
