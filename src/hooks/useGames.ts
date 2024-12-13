import { Game, GameQuery } from "../types/types";
import useData from "./useData";

const useGames = (GameQuery: GameQuery) =>
    useData<Game>(
        "/games",
        {
            params: {
                genres: GameQuery.genre?.id,
            },
        },
        [GameQuery]
    );

export default useGames;
