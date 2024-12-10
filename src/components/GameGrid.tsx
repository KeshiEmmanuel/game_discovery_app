import { Spinner } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GameGrid = () => {
    const { isLoading, games, error } = useGames("/games");
    return (
        <>
            {isLoading && (
                <Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    colorScheme="blue.500"
                    size={"xl"}
                />
            )}
            <ul>
                {games.map((game) => (
                    <li>{game.name}</li>
                ))}
            </ul>
        </>
    );
};

export default GameGrid;
