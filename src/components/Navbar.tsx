import { Box, HStack, Text, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeButton } from "./ui/color-mode";
import SearchInput from "./SearchInput";
const Navbar = () => {
  return (
    <>
      <HStack justifyContent="space-between" p={1}>
        <Box>
          <Image src={logo} w={"60px"} />
        </Box>
        <SearchInput />
        <ColorModeButton></ColorModeButton>
      </HStack>
    </>
  );
};

export default Navbar;
