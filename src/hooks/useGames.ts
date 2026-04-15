import { GameQuery } from "@/App";
import useData from "./useData";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (gameQery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQery.genre?.id,
        parent_platforms: gameQery.platform?.id,
        ordering: gameQery.sortOrder,
        search: gameQery.searchText,
      },
    },
    [gameQery],
  );
export default useGames;
