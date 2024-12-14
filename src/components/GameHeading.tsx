import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../types/types";

interface Props {
    gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
    const renderedText = `${gameQuery.platform?.name || ""} ${
        gameQuery.genre?.name || ""
    }  `;
    return (
        <Heading fontSize={"4xl"} paddingY={"15px"}>
            {renderedText} Games
        </Heading>
    );
};

export default GameHeading;
