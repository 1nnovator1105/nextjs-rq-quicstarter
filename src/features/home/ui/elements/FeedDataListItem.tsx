import { FeedDataListItemType } from "../../model/types";

interface FeedDataListItemProps {
  item: FeedDataListItemType;
}

const FeedDataListItem = ({ item }: FeedDataListItemProps) => {
  return (
    <div className="flex flex-row items-center justify-between gap-4 px-4">
      <div className="flex flex-col gap-1 break-all flex-1">
        <div className="text-base font-medium">{item.title}</div>
        <div className="text-sm text-gray-500">{item.body}</div>
      </div>
      <div className="flex flex-col self-end">{item.userId}님의 글</div>
    </div>
  );
};

export { FeedDataListItem };
