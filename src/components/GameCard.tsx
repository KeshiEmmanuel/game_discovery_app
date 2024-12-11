import { Game } from "../types/types";
import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";

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
                <PlatformIconList
                    platform={game.parent_platforms.map((p) => p.platform)}
                />
            </CardBody>
        </Card>
    );
};
