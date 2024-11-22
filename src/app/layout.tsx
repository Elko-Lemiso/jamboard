import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  ClerkLoading,
} from "@clerk/nextjs";
import "./globals.css";
import Image from "next/image";
import ConvexClerkProvider from "@/providers/ConvexClerkProvider";
import { ModalProvider } from "@/providers/modalProvider";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ConvexClerkProvider>
      <html lang="en">
        <body>
          <ModalProvider />

          <ClerkLoading>
            <div className="h-full w-full flex items-center justify-center">
              <Image
                src="/logo.svg"
                alt="Next.js logo"
                width={180}
                height={38}
                priority
                className="animate-pulse duration-700 dark:invert"
              />
            </div>
          </ClerkLoading>
          <SignedIn>{children}</SignedIn>
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
        </body>
      </html>
    </ConvexClerkProvider>
  );
}
