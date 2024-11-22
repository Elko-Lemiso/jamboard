import React from "react";

export const Toolbar = () => {
  return (
    <div className="absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4 ">
      <div className="bg-white rounded-md p-1.5 gap-y-1 flex items-center shadow-md flex-col ">
        <div>Pencil</div>
        <div>Suqlare</div>
        <div>Circle</div>
        <div>Ellopsis</div>
      </div>
      <div className="bg-white rounded-md p-1.5 gap-y-1 flex  shadow-md flex-col items-center">
        <div>Undo</div>
        <div>Redo</div>
      </div>
    </div>
  );
};
