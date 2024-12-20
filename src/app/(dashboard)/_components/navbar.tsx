"use client";
import { useOrganization, UserButton } from "@clerk/clerk-react";
import { OrganizationSwitcher } from "@clerk/clerk-react";
import React from "react";
import { SearchInput } from "./search-input";
import { InviteButton } from "./invite-button";

export const Navbar = () => {
  const { organization } = useOrganization();
  return (
    <div className="flex items-center gap-x-4 p-5 ">
      <div className="hidden lg:flex lg:flex-1  items-center gap-x-4">
        <SearchInput />
      </div>
      <div className="blcok lg:hidden flex-1">
        <OrganizationSwitcher
          hidePersonal
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                justifyItems: "center",
                alignItems: "center",
                width: "100%",
                maxWidth: "367px",
              },
              organizationSwitcherTrigger: {
                padding: "6px",
                width: "100%",
                borderRadius: "8px",
                border: "1px solid #E5E7EB",
                justifyContent: "space-between",
                backgroundColor: "white",
              },
            },
          }}
        />
      </div>
      {organization && <InviteButton />}
      <UserButton />
    </div>
  );
};
