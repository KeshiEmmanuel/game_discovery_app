import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBar from "./SearchBar";

interface Props {
    onSearch: (searchString: string) => void;
}
function Navbar({ onSearch }: Props) {
    return (
        <HStack justifyContent={"space-between"} paddingInline={"3px"}>
            <Image src={logo} boxSize={"60px"} />
            <SearchBar onSearch={onSearch} />
            <ColorModeSwitch />
        </HStack>
    );
}

export default Navbar;
