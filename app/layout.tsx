import type { Metadata } from "next";
import { Noto_Sans_JP as FontSans } from "next/font/google";
import "./globals.css";

import { cn, generatePathName } from "@/lib/utils";
import { NavHeader } from "@/components/nav-header";
import { headers } from "next/headers";
import { CustomHeaders } from "@/constants/api-constants";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export async function generateMetadata(): Promise<Metadata> {
  const headersList = headers();
  const pathname = headersList.get(CustomHeaders.PATH_NAME);

  return {
    title: generatePathName(pathname),
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <div
          className={cn(
            "relative flex min-h-screen flex-col bg-background",
            "bg-gradient-to-t from-neutral-300 via-neutral-200 to-neutral-100",
          )}
        >
          <header className="sticky top-0 z-50 w-full backdrop-blur">
            <NavHeader />
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
