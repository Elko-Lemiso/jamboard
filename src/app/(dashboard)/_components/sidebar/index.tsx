"use client";
import React from "react";
import { NewButton } from "./new-button";
import { List } from "./list";

export const Sidebar = () => {
  return (
    <aside className="h-full text-white fixed z-[1] left-0 bg-slate-900 w-[60px] flex p-3 flex-col gap-y-4">
      <List />
      <NewButton />
    </aside>
  );
};
