"use client";
import React from "react";
import { Room } from "@/app/room";
import { Canvas } from "./_components/canvas";

const BoardIdPage = ({ params }: { params: Promise<{ boardId: string }> }) => {
  const { boardId } = React.use(params);

  return (
    <Room roomId={boardId}>
      <Canvas boardId={boardId} />
    </Room>
  );
};

export default BoardIdPage;
