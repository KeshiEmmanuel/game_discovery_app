import { Game } from "../types/types";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";

interface Props {
    game: Game;
    fontFamily: string;
}
export const GameCard = ({ game, fontFamily }: Props) => {
    return (
        <Card borderRadius={10} overflow={"hidden"}>
            <Image src={game.background_image} />
            <CardBody>
                <Heading fontFamily={fontFamily} fontSize={"2xl"}>
                    {game.name}
                </Heading>
            </CardBody>
        </Card>
    );
};
