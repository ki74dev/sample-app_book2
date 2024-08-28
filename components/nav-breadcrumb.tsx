"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { generateBreadcrumbs } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

export const NavBreadcrumb = () => {
  const pathName = usePathname();
  const breadcrumbPaths = generateBreadcrumbs(pathName);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbPaths.map(({ path, label }, index) => (
          <Fragment key={path}>
            {index !== 0 && <BreadcrumbSeparator />}
            <BreadcrumbItem>
              {index !== breadcrumbPaths.length - 1 && (
                <BreadcrumbLink href={path}>{label}</BreadcrumbLink>
              )}
              {index === breadcrumbPaths.length - 1 && (
                <BreadcrumbPage>{label}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
