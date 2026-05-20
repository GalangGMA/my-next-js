import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function PanelCard({
  children,
  className,
}: Readonly<{
  children: ReactNode;
  className?: string;
}>) {
  return <article className={cn("app-panel rounded-[24px]", className)}>{children}</article>;
}
