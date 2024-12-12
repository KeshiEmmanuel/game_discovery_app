import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { GameCard } from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

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
                        <GameCardContainer>
                            <GameCardSkeleton key={skeleton} />
                        </GameCardContainer>
                    ))}
                {games.map((game) => (
                    <GameCardContainer>
                        <GameCard
                            fontFamily="Inter"
                            key={game.id}
                            game={game}
                        />
                    </GameCardContainer>
                ))}
            </SimpleGrid>
        </>
    );
};

export default GameGrid;
