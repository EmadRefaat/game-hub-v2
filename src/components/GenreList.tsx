import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { err, genres, loading } = useGenres();
  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
