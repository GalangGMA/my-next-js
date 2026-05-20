import type { ReactNode } from "react";

export function FormCheckboxField({ children, input }: Readonly<{ children: ReactNode; input: ReactNode }>) {
  return (
    <label className="flex items-center gap-3 text-[#746d67]">
      {input}
      {children}
    </label>
  );
}
