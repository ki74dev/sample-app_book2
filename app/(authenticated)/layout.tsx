import { cn } from "@/lib/utils";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={cn("flex-1")}>
      <div className="container relative">{children}</div>
    </main>
  );
}
