import type { ReactNode } from "react";
import { Sidebar } from "@/components/layout/sidebar";

export function AdminShell({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="min-h-screen bg-[#f7f3ef] text-[#1e1c1b] lg:grid lg:h-screen lg:grid-cols-[294px_minmax(0,1fr)] lg:overflow-hidden">
      <Sidebar />
      <main className="min-w-0 lg:overflow-y-auto">{children}</main>
    </div>
  );
}
