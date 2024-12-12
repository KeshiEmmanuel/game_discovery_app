import { useState } from "react";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import MaxContainer from "../components/ui/MaxContainer";
import GameGrid from "../components/GameGrid";
import GenreList from "../components/GenreList";
import { Genre } from "../types/types";

function App() {
    const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
    return (
        <MaxContainer maxWidth="1200px">
            <Grid
                templateAreas={{
                    base: `"nav" "main"`,
                    lg: `"nav nav""aside main"`,
                }}
            >
                <GridItem area={"nav"}>
                    <Navbar />
                </GridItem>
                <Show above="lg">
                    <GridItem area={"aside"}>
                        <GenreList
                            onSelectGenre={(genre) => setSelectedGenre(genre)}
                        />
                    </GridItem>
                </Show>
                <GridItem area={"main"}>
                    <GameGrid selectedGenre={selectedGenre} />
                </GridItem>
            </Grid>
        </MaxContainer>
    );
}

export default App;
