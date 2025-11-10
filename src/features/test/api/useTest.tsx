import { FeedDataListItemType } from "@/features/home/model/types";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

// apis

const fetchTestData = async () => {
  const { data } = await axios.get<FeedDataListItemType[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return data;
};

// queries

export const useTestQuery = (
  options?: UseQueryOptions<FeedDataListItemType[], AxiosError>
) => {
  return useQuery<FeedDataListItemType[], AxiosError>({
    queryKey: ["test"],
    queryFn: fetchTestData,
    ...options,
  });
};
