import { cn } from "@/lib/utils";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={cn("flex flex-1 items-center justify-center")}>
      {children}
    </main>
  );
}
