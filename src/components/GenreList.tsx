import useGenres, { Genre } from "../hooks/useGenres";
import { HStack, Image, Text, Spinner, Button } from "@chakra-ui/react";
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
    <List.Root listStyle="none">
      {data.map((genre) => (
        <List.Item key={genre.id} paddingY={1}>
          <HStack>
            <Image
              boxSize="32px"
              src={getCroppedImageUrl(genre.image_background)}
              borderRadius="8px"
            ></Image>
            <Button
              variant="plain"
              onClick={() => onSelectGenre(genre)}
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
            >
              {genre.name}
            </Button>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
