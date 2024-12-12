import { Game } from "../types/types";
import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import { getCroppedImageUrl } from "../utils/CroppedImage";

interface Props {
    game: Game;
    fontFamily: string;
}
export const GameCard = ({ game, fontFamily }: Props) => {
    return (
        <Card width={"300px"} borderRadius={10} overflow={"hidden"}>
            <Image src={getCroppedImageUrl(game.background_image)} />
            <CardBody>
                <Heading fontFamily={fontFamily} fontSize={"2xl"}>
                    {game.name}
                </Heading>
                <HStack justifyContent={"space-between"}>
                    <PlatformIconList
                        platform={game.parent_platforms.map((p) => p.platform)}
                    />
                    <CriticScore score={game.metacritic} />
                </HStack>
            </CardBody>
        </Card>
    );
};
