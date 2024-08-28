import { NavBreadcrumb } from "@/components/nav-breadcrumb";
import { cn } from "@/lib/utils";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={cn("flex-1")}>
      <div className="container relative">
        <nav className="mb-4">
          <NavBreadcrumb />
        </nav>
        {children}
      </div>
    </main>
  );
}
