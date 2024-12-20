import { Game, GameQuery } from "../types/types";
import useData from "./useData";

const useGames = (GameQuery: GameQuery) =>
    useData<Game>(
        "/games",
        {
            params: {
                genres: GameQuery.genre?.id,
                platforms: GameQuery.platform?.id,
                search: GameQuery.searchString,
                ordering: GameQuery.sortOrder,
            },
        },
        [GameQuery]
    );

export default useGames;
