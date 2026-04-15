import useGenres, { Genre } from "../hooks/useGenres";
import {
  HStack,
  Image,
  Text,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import { List } from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { err, data, loading } = useGenres();
  if (err) return null;
  if (loading) return <Spinner />;
  console.log(data);
  return (
    <>
      <Heading fontSize="2xl" marginBottom="2">
        Genre
      </Heading>
      <List.Root listStyle="none">
        {data.map((genre) => (
          <List.Item key={genre.id}>
            <HStack>
              <Image
                objectFit="cover"
                boxSize="32px"
                src={getCroppedImageUrl(genre.image_background)}
                borderRadius="8px"
              ></Image>
              <Button
                padding="0.5"
                variant="plain"
                onClick={() => onSelectGenre(genre)}
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                textAlign="left"
              >
                {genre.name}
              </Button>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
