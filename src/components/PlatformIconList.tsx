import { HStack, Icon, Text } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import { FaPlaystation } from "react-icons/fa";
import { TbDeviceDesktop } from "react-icons/tb";
import { FaXbox } from "react-icons/fa";
import { IoLogoApple } from "react-icons/io";
import { FaAndroid } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";
import { TbDeviceNintendo } from "react-icons/tb";

import { FaLinux } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}
const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    playstation: FaPlaystation,
    pc: TbDeviceDesktop,
    xbox: FaXbox,
    mac: IoLogoApple,
    linux: FaLinux,
    android: FaAndroid,
    nintendo: TbDeviceNintendo,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    <>
      <HStack>
        {platforms.map((platform) => {
          const IconComponent = iconMap[platform.slug];
          if (!IconComponent) return null;
          return (
            <Icon color="gray.500" key={platform.id}>
              <IconComponent />
            </Icon>
          );
        })}
      </HStack>
    </>
  );
};

export default PlatformIconList;
