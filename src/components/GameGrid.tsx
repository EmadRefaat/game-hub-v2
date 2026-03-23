import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { err, games } = useGames();
  return (
    <>
      {err && err}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
