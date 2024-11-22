"use client";

import { useQuery } from "convex/react";
import { EmptyBoards } from "./emptyBoards";
import { EmptyFavourites } from "./emptyFavourites";
import { EmptySearch } from "./emptySearch";
import { api } from "../../../../convex/_generated/api";
import { BoardCard } from "./boardCard";
import { NewBoardButton } from "./newBoardButton";

interface QueryParams {
  search?: string;
  favourites?: string;
}

interface Board {
  _id: string;
  title: string;
  imageUrl: string;
  authorId: string;
  authorName: string;
  _creationTime: number;
  orgId: string;
  isFavourite: boolean;
}

interface BoardListProps {
  orgId: string;
  query: QueryParams;
}

export function BoardList({ orgId, query }: BoardListProps) {
  const data: Board[] | undefined = useQuery(api.boards.get, {
    orgId,
    ...query,
  });

  const isFavourite = query.favourites === "true";

  if (data === undefined) {
    return (
      <div>
        <h2 className="text-3xl">
          {isFavourite ? "Favourite Boards" : "Team Boards"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
          <NewBoardButton orgId={orgId} disabled />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
        </div>
      </div>
    );
  }

  if (!data.length && query.search) {
    return <EmptySearch />;
  }

  if (!data.length && isFavourite) {
    return <EmptyFavourites />;
  }

  if (!data.length) {
    return <EmptyBoards />;
  }

  return (
    <div>
      <h2 className="text-3xl">
        {isFavourite ? "Favourite Boards" : "Team Boards"}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
        <NewBoardButton orgId={orgId} />
        {data.map((board) => (
          <BoardCard
            key={board._id}
            id={board._id}
            title={board.title}
            imageUrl={board.imageUrl}
            authorId={board.authorId}
            authorName={board.authorName}
            createdAt={board._creationTime}
            orgId={board.orgId}
            isFavourite={board.isFavourite}
          />
        ))}
      </div>
    </div>
  );
}
