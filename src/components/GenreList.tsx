import { Text, VStack, Spinner } from "@chakra-ui/react";
import useData from "../hooks/useData";

interface Genre {
    id: number;
    name: string;
}

const GenreList = () => {
    const { data: genres, isLoading, error } = useData<Genre>("/genres");
    console.log(genres);

    if (error) return null;
    return (
        <VStack alignItems={"start"} paddingTop={"50px"}>
            <ul>
                {isLoading && <Spinner />}
                {genres.map((genre) => (
                    <li key={genre.id}>{genre.name}</li>
                ))}
            </ul>
        </VStack>
    );
};

export default GenreList;
