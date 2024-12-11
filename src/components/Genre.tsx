import { Text, VStack, ColorMode } from "@chakra-ui/react";
import React from "react";

const Genre = () => {
    const genre = [
        "Indie",
        "Racing",
        "Horror",
        "Open World",
        "RPG",
        "Simulation",
        "Sports",
        "Figthing",
        "Adventure",
        "Family",
        "Board Games",
        "Casual",
        "Shooter",
        "Strategy",
        "Arcade",
        "Massively Multiplayed",
    ];
    return (
        <VStack alignItems={"start"} paddingTop={"50px"}>
            {genre.map((genre) => (
                <Text color={`gray.300`} key={genre}>
                    {genre}
                </Text>
            ))}
        </VStack>
    );
};

export default Genre;
