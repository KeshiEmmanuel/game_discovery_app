import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import MaxContainer from "../components/ui/MaxContainer";
import GameGrid from "../components/GameGrid";
import GenreList from "../components/GenreList";

function App() {
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
                        <GenreList />
                    </GridItem>
                </Show>
                <GridItem area={"main"}>
                    <GameGrid />
                </GridItem>

                {/* <List>
                    {games.map((game) => (
                        <ListItem>{game.game}</ListItem>
                    ))}
                </List> */}
            </Grid>
        </MaxContainer>
    );
}

export default App;
