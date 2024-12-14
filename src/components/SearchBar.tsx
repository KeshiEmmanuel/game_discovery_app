import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FormEvent, useRef } from "react";
import { LuSearch } from "react-icons/lu";

interface Props {
    onSearch: (searchString: string) => void;
}

const SearchBar = ({ onSearch }: Props) => {
    const inputRef = useRef<HTMLInputElement>(null);

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        if (inputRef.current) return onSearch(inputRef.current.value);
    }
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <InputGroup>
                <InputLeftElement children={<LuSearch />} />
                <Input
                    width={"500px"}
                    ref={inputRef}
                    placeholder="Search Games"
                />
            </InputGroup>
        </form>
    );
};

export default SearchBar;
