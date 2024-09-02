"use client";

import { useRouter } from "next/navigation";
import { Button, ButtonProps } from "@/components/ui/button";

type RouterButtonProps = ButtonProps & {
  href: string;
  children: React.ReactNode;
};

export const RouterButton = ({
  href,
  children,
  ...props
}: RouterButtonProps) => {
  const router = useRouter();

  return (
    <Button {...props} onClick={() => router.push(href)}>
      {children}
    </Button>
  );
};