import { SimpleGrid, Text } from "@chakra-ui/react";
import { GameCard } from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import useData from "../hooks/useData";
import { Game } from "../types/types";

const GameGrid = () => {
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const { data: games, isLoading, error } = useData<Game>("/games");
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
