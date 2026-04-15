import { Box, HStack, Text, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeButton } from "./ui/color-mode";
import SearchInput from "./SearchInput";
interface Props {
  onSearch: (searchText: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
  return (
    <>
      <HStack p={1}>
        <Box>
          <Image src={logo} w={"60px"} />
        </Box>
        <SearchInput onSearch={onSearch} />
        <ColorModeButton></ColorModeButton>
      </HStack>
    </>
  );
};

export default Navbar;
