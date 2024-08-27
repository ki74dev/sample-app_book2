import type { Metadata } from "next";
import { Noto_Sans_JP as FontSans } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

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
            ヘッダ
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
