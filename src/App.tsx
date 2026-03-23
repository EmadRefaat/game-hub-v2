import { Box, Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <Grid
      templateColumns={{
        base: "1fr",
        lg: "repeat(12, 1fr)",
      }}
      templateRows={{
        base: "auto 1fr",
        lg: "auto 1fr",
      }}
      gap={1}
      minHeight="100vh"
    >
      {/* Navbar - Full width */}
      <GridItem
        colSpan={{
          base: 1,
          lg: 12,
        }}
      >
        <Navbar />
      </GridItem>

      {/* Aside - 2 columns on large screens, hidden on mobile */}
      <GridItem
        colSpan={{
          base: 1,
          lg: 2,
        }}
        rowSpan={{
          base: 1,
          lg: 2,
        }}
        // bg="gray.200"
        p={4}
        display={{
          base: "none",
          lg: "block",
        }}
        height="100%"
      >
        <Box fontWeight="bold">Aside</Box>
      </GridItem>

      {/* Main - 10 columns on large screens, full width on mobile */}
      <GridItem
        colSpan={{
          base: 1,
          lg: 10,
        }}
        rowSpan={{
          base: 1,
          lg: 2,
        }}
        // bg="gray.100"
        p={4}
        height="100%"
      >
        <Box fontWeight="bold">
          <GameGrid />
        </Box>
      </GridItem>
    </Grid>
  );
}

export default App;
