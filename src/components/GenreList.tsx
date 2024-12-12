import {
    Image,
    VStack,
    Spinner,
    ListItem,
    List,
    HStack,
    Button,
} from "@chakra-ui/react";
import useData from "../hooks/useData";
import { Genre } from "../types/types";
import { getCroppedImageUrl } from "../utils/CroppedImage";

interface Props {
    onSelectGenre: (genre: Genre) => void;
}
const GenreList = ({ onSelectGenre }: Props) => {
    const { data: genres, isLoading, error } = useData<Genre>("/genres");
    console.log(genres);

    if (error) return null;
    return (
        <VStack alignItems={"start"} paddingTop={"30px"}>
            <List>
                {isLoading && <Spinner />}
                {genres.map((genre) => (
                    <HStack paddingBottom={"5px"}>
                        <Image
                            src={getCroppedImageUrl(genre.image_background)}
                            objectFit={"cover"}
                            width={"30px"}
                            borderRadius={"10px"}
                            height={"40px"}
                        />
                        <Button
                            variant={"link"}
                            fontSize={"18px"}
                            key={genre.id}
                            onClick={() => onSelectGenre(genre)}
                        >
                            {genre.name}
                        </Button>
                    </HStack>
                ))}
            </List>
        </VStack>
    );
};

export default GenreList;
