import { Image, ImageProps } from "@chakra-ui/react";
import Meh from "../assets/meh.webp";
import Bullseye from "../assets/bulls-eye.webp";
import ThumbsUp from "../assets/thumbs-up.webp";
interface Props {
    rating: number;
}
const Emoji = ({ rating }: Props) => {
    if (rating < 3) return null;

    const emojiMap: { [key: string]: ImageProps } = {
        3: { src: Meh, alt: "meh", boxSize: "25px" },
        4: { src: ThumbsUp, alt: "thumbs-up", boxSize: "25px" },
        5: { src: Bullseye, alt: "bulls-eye", boxSize: "25px" },
    };

    return (
        <div>
            <Image {...emojiMap[rating]} marginTop={1} />
        </div>
    );
};

export default Emoji;
