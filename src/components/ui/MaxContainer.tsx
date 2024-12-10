import { Container } from "@chakra-ui/react";
interface Props {
    children: React.ReactNode;
    maxWidth: string;
}
function MaxContainer({ children, maxWidth }: Props) {
    return (
        <Container fontFamily={"Inter"} maxWidth={maxWidth}>
            {children}
        </Container>
    );
}

export default MaxContainer;
