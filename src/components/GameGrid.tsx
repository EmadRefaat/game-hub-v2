import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import { SimpleGrid, Text, Center } from "@chakra-ui/react";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { err, games, loading } = useGames();
  const skeletonsArr = [1, 2, 3, 4, 5, 6];
  console.log(games);
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
    <>
      {loading && (
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} gap={5}>
          {skeletonsArr.map((skeleton) => (
            <GameCardSkeleton key={skeleton}></GameCardSkeleton>
          ))}
        </SimpleGrid>
      )}
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} gap={4}>
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
