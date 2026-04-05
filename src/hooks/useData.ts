import { AxiosRequestConfig, CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endPoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[],
) => {
  const [data, setData] = useState<T[]>([]);
  const [err, setErr] = useState("");
  const [loading, isLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();
      isLoading(true);
      apiClient
        .get<FetchResponse<T>>(endPoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((res) => {
          setData(res.data.results);
          isLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return "";
          setErr(err.message);
          isLoading(false);
        });

      return () => controller.abort();
    },
    deps ? [...deps] : [],
  );

  return { data, err, loading };
};

export default useData;
