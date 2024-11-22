"use client";

import { useOrganization, useOrganizationList } from "@clerk/clerk-react";
import Image from "next/image";
import { Hint } from "@/components/hint";
import { cn } from "@/lib/utils";

interface ItemProps {
  id: string;
  name: string;
  imageUrl: string;
}

export const Item = ({ id, name, imageUrl }: ItemProps) => {
  const { organization } = useOrganization();
  const { setActive } = useOrganizationList();

  const isActive = organization?.id === id;

  const handleClick = () => {
    if (!setActive) return;

    setActive({
      organization: id,
    });
  };

  return (
    <div className="aspect-square relative">
      <Hint side="right" align="start" sideOffset={18} label={name}>
        <Image
          fill
          src={imageUrl}
          alt={name}
          className={cn(
            "rounded-md cursor-pointer opacity-75 hover:opacity-100 transition bg-cover",
            isActive && "opacity-100"
          )}
          onClick={handleClick}
        />
      </Hint>
    </div>
  );
};
