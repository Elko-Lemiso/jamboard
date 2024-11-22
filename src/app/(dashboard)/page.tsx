// FILE: page.tsx

"use client";

import { useOrganization } from "@clerk/nextjs";
import { EmptyOrg } from "./_components/emptyOrg";
import { BoardList } from "./_components/boardList";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

export default function DashboardPage() {
  const { organization } = useOrganization();
  const searchParams = useSearchParams();

  const query = useMemo(
    () => ({
      search: searchParams.get("search") || undefined,
      favourites: searchParams.get("favourites") || undefined,
    }),
    [searchParams]
  );

  return (
    <div className="flex-1 h-[calc(100%-80px)] p-6">
      {!organization ? (
        <EmptyOrg />
      ) : (
        <BoardList orgId={organization.id} query={query} />
      )}
    </div>
  );
}
