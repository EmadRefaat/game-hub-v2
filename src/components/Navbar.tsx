import { Box, HStack, Text, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
const Navbar = () => {
  return (
    <>
      <HStack>
        <Box>
          <Image src={logo} w={"60px"} />
        </Box>
        <Text>Navbar</Text>
      </HStack>
    </>
  );
};

export default Navbar;
