import useGenres from "../hooks/useGenres";
import { HStack, Image, Text, Spinner } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import { List } from "@chakra-ui/react";

const GenreList = () => {
  const { err, data, loading } = useGenres();
  if (err) return null;
  if (loading) return <Spinner />;
  console.log(data);
  return (
    <List.Root listStyle="none">
      {data.map((genre) => (
        <List.Item key={genre.id} paddingY={2}>
          <HStack>
            <Image
              boxSize="32px"
              src={getCroppedImageUrl(genre.image_background)}
              borderRadius="8px"
            ></Image>
            <Text>{genre.name}</Text>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
