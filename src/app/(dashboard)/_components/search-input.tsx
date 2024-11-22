"use client";

import qs from "query-string";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { ChangeEvent, useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { useDebounce } from "@/hooks/useDebounce"; // Update this path as needed

export const SearchInput = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const url = qs.stringifyUrl(
      {
        url: "/",
        query: {
          search: debouncedSearch,
        },
      },
      {
        skipEmptyString: true,
        skipNull: true,
      }
    );
    router.push(url);
  }, [debouncedSearch, router]);

  return (
    <div className="relative w-full">
      <Search
        size={24}
        className="absolute top-1/2 left-3 transform -translate-y-1/2 text-muted-foreground h-4 w-4"
      />
      <Input
        className="w-full max-w-[516] pl-9"
        placeholder="Search Boards"
        value={search}
        onChange={handleChange}
      />
    </div>
  );
};
