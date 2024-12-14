import { SimpleGrid, Text } from "@chakra-ui/react";
import { GameCard } from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import useGames from "../hooks/useGames";
import { GameQuery } from "../types/types";

interface Props {
    gameQuery: GameQuery;
}
const GameGrid = ({ gameQuery }: Props) => {
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const { data: games, isLoading, error } = useGames(gameQuery);
    console.log(games);

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
                        <GameCardContainer key={skeleton}>
                            <GameCardSkeleton />
                        </GameCardContainer>
                    ))}
                {games.map((game) => (
                    <GameCardContainer key={game.id}>
                        <GameCard fontFamily="Inter" game={game} />
                    </GameCardContainer>
                ))}
            </SimpleGrid>
        </>
    );
};

export default GameGrid;
