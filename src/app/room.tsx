"use client";
import { ReactNode } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { LiveList, LiveMap, LiveObject } from "@liveblocks/client";

interface RoomProps {
  children: ReactNode;
  roomId: string;
}
import { Layer } from "@/types/types";

export function Room({ children, roomId }: RoomProps) {
  return (
    <LiveblocksProvider
      publicApiKey={
        "pk_dev_s11dbGw_6oI4kEFAGTa_VY2oM9ZKS5FzPxPez69cmUU1ARePSmf2-ssZe6oecqth"
      }
    >
      <RoomProvider
        id={roomId}
        initialPresence={{
          selection: [],
          cursor: null,
          pencilDraft: null,
          penColor: null,
        }}
        initialStorage={{
          layers: new LiveMap<string, LiveObject<Layer>>(),
          layerIds: new LiveList([]),
        }}
      >
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}
