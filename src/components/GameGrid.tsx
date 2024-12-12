import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { GameCard } from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
    const { isLoading, games, error } = useGames("/games");
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid
                padding={"10px"}
                columns={{
                    sm: 1,
                    md: 2,
                    lg: 3,
                }}
                spacing={10}
            >
                {isLoading &&
                    skeletons.map((skeleton) => (
                        <GameCardSkeleton key={skeleton} />
                    ))}
                {games.map((game) => (
                    <GameCard fontFamily="Inter" key={game.id} game={game} />
                ))}
            </SimpleGrid>
        </>
    );
};

export default GameGrid;
