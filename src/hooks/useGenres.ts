import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { Game } from "./useGames";

interface Genre {
  id: number;
  name: string;
}

interface FetchGenresResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [err, setErr] = useState("");
  const [loading, isLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    isLoading(true);
    apiClient
      .get<FetchGenresResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
        isLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return "";
        setErr(err.message);
        isLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { genres, err, loading };
};

export default useGenres;
