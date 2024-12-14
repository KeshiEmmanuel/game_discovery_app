import { useState } from "react";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import MaxContainer from "../components/ui/MaxContainer";
import GameGrid from "../components/GameGrid";
import GenreList from "../components/GenreList";
import { GameQuery } from "../types/types";
import PlatformSelector from "../components/PlatformSelector";

function App() {
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
    return (
        <MaxContainer maxWidth="1200px">
            <Grid
                templateAreas={{
                    base: `"nav" "main"`,
                    lg: `"nav nav""aside main"`,
                }}
            >
                <GridItem area={"nav"}>
                    <Navbar
                        onSearch={(searchString) =>
                            setGameQuery({ ...gameQuery, searchString })
                        }
                    />
                </GridItem>
                <Show above="lg">
                    <GridItem area={"aside"}>
                        <GenreList
                            selectedGenre={gameQuery.genre}
                            onSelectGenre={(genre) =>
                                setGameQuery({ ...gameQuery, genre })
                            }
                        />
                    </GridItem>
                </Show>
                <GridItem area={"main"}>
                    <PlatformSelector
                        selectedPlatform={gameQuery.platform}
                        onSelectPlatform={(platform) =>
                            setGameQuery({ ...gameQuery, platform })
                        }
                    />
                    <GameGrid gameQuery={gameQuery} />
                </GridItem>
            </Grid>
        </MaxContainer>
    );
}

export default App;
