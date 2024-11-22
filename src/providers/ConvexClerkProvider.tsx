"use client";
import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ConvexReactClient } from "convex/react";

const convex = new ConvexReactClient("https://usable-lobster-541.convex.cloud");
interface ConvexClerkProviderProps {
  children: React.ReactNode;
}

const ConvexClerkProvider = ({ children }: ConvexClerkProviderProps) => {
  return (
    <ClerkProvider
      publishableKey={"pk_test_bW9kZWwtaGVyb24tODguY2xlcmsuYWNjb3VudHMuZGV2JA"}
    >
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        {children}
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
};

export default ConvexClerkProvider;
