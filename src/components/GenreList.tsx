import { Text, VStack, ColorMode } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";

const GenreList = () => {
    const { genres, isLoading, error } = useGenre("/genres");
    console.log(genres);

    return (
        <VStack alignItems={"start"} paddingTop={"50px"}>
            <ul>
                {genres.map((genre) => (
                    <li>{genre.name}</li>
                ))}
            </ul>
        </VStack>
    );
};

export default GenreList;
