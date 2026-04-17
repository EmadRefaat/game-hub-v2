import genres from "@/data/genres";
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => ({
  data: genres,
  err: false,
  loading: null,
});

export default useGenres;
