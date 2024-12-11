import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { GameCard } from "./GameCard";

const GameGrid = () => {
    const { isLoading, games, error } = useGames("/games");
    return (
        <>
            {isLoading && (
                <Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray"
                    colorScheme="blue"
                    size={"xl"}
                />
            )}
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
                {games.map((game) => (
                    <GameCard fontFamily="Inter" key={game.id} game={game} />
                ))}
            </SimpleGrid>
        </>
    );
};

export default GameGrid;
