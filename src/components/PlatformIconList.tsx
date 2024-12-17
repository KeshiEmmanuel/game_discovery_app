import {
    // Button,
    // ButtonGroup,
    // ButtonSpinner,
    HStack,
    Icon,
    Text,
} from "@chakra-ui/react";
import { Platform } from "../types/types";
import {
    FaWindows,
    FaPlaystation,
    FaApple,
    FaLinux,
    FaXbox,
    FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { SiNintendo } from "react-icons/si";
import { IconType } from "react-icons";
interface Props {
    platform: Platform[];
}
const PlatformIconList = ({ platform }: Props) => {
    const iconMap: { [key: string]: IconType } = {
        playstation: FaPlaystation,
        xbox: FaXbox,
        linux: FaLinux,
        pc: FaWindows,
        nintendo: SiNintendo,
        web: BsGlobe,
        ios: MdPhoneIphone,
        android: FaAndroid,
        mac: FaApple,
    };
    return (
        <HStack marginY={1}>
            {platform.map((platform) => (
                <Icon
                    key={platform.id}
                    as={iconMap[platform.slug]}
                    color={"gray.500"}
                />
            ))}
        </HStack>
    );
};

// interface DownloadProps {
//     isDownloading: boolean;
// }
// function DownloadButton({ isDownloading }: DownloadProps) {
//     return (
//         <>
//             <ButtonGroup>
//                 <Button>
//                     {isDownloading && <ButtonSpinner />}{" "}
//                     {isDownloading ? "Downloading" : "Download"}
//                 </Button>
//             </ButtonGroup>
//         </>
//     );
// }

export default PlatformIconList;
