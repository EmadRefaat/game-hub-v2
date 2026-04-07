import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import { SimpleGrid, Text, Center } from "@chakra-ui/react";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/usePlatforms";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
  const { err, data, loading } = useGames(selectedGenre, selectedPlatform);
  const skeletonsArr = [1, 2, 3, 4, 5, 6, 7, 8];
  console.log(data);
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
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton></GameCardSkeleton>
            </GameCardContainer>
          ))}
        </SimpleGrid>
      )}
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} gap={4}>
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
