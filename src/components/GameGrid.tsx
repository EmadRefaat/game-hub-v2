import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import { SimpleGrid, Text, Center } from "@chakra-ui/react";

const GameGrid = () => {
  const { err, games } = useGames();
  if (err) {
    return (
      <Center py={8}>
        <Text color="red.500" fontWeight="bold">
          Error: {err}
        </Text>
      </Center>
    );
  }

  return (
    <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} gap={4}>
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
