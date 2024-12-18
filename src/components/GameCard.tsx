import { Game } from "../types/types";
import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import { getCroppedImageUrl } from "../utils/CroppedImage";
import Emoji from "./Emoji";

interface Props {
    game: Game;
    fontFamily: string;
}
export const GameCard = ({ game, fontFamily }: Props) => {
    return (
        <Card>
            <Image src={getCroppedImageUrl(game.background_image)} />
            <CardBody>
                <HStack justifyContent={"space-between"} paddingBottom={"5px"}>
                    <PlatformIconList
                        platform={game.parent_platforms.map((p) => p.platform)}
                    />
                    <CriticScore score={game.metacritic} />
                </HStack>
                <Heading fontFamily={fontFamily} fontSize={"2xl"}>
                    {game.name}
                    <Emoji rating={game.rating_top} />
                </Heading>
            </CardBody>
        </Card>
    );
};
