import { useState } from "react";
import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import { GameQuery } from "../types/types";
import MaxContainer from "../components/ui/MaxContainer";
import Navbar from "../components/Navbar";
import GameGrid from "../components/GameGrid";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import GameHeading from "../components/GameHeading";
import SortSelector from "../components/SortSelector";

function App() {
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
    return (
        <MaxContainer maxWidth="1200px">
            <Grid
                templateAreas={{
                    base: `"nav" "main"`,
                    lg: `"nav nav""aside main"`,
                }}
                templateColumns={{
                    base: "1fr",
                    lg: "250px 1fr",
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
                    <Box>
                        <GameHeading gameQuery={gameQuery} />
                        <Flex gap={"15px"} paddingY={4}>
                            <Box>
                                <PlatformSelector
                                    selectedPlatform={gameQuery.platform}
                                    onSelectPlatform={(platform) =>
                                        setGameQuery({ ...gameQuery, platform })
                                    }
                                />
                            </Box>
                            <SortSelector
                                selectedSortOrder={gameQuery.sortOrder}
                                onSelectSortOrder={(sortOrder) =>
                                    setGameQuery({ ...gameQuery, sortOrder })
                                }
                            />
                        </Flex>
                    </Box>
                    <GameGrid gameQuery={gameQuery} />
                </GridItem>
            </Grid>
        </MaxContainer>
    );
}

export default App;
