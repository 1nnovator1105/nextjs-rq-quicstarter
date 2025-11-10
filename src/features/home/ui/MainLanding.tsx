"use client";

import { useTestQuery } from "@/features/test/api/useTest";
import { FeedDataListItemType } from "../model/types";
import { FeedDataListItem } from "./elements";

const MainLanding = () => {
  const testQuery = useTestQuery();

  if (testQuery.isLoading) return <div>Loading...</div>;
  if (testQuery.isError) return <div>Error: {testQuery.error.message}</div>;

  return (
    <div>
      <div className="flex flex-col gap-4">
        {testQuery.data?.map((item: FeedDataListItemType) => (
          <FeedDataListItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export { MainLanding };
