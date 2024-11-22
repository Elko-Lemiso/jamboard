import Image from "next/image";

import React from "react";

export const Loading = () => {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <Image
        src="/logo.svg"
        alt="Next.js logo"
        width={120}
        height={38}
        priority
        className="animate-pulse duration-700 dark:invert"
      />
    </div>
  );
};
