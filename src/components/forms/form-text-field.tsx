import type { ReactNode } from "react";

export function FormTextField({
  label,
  error,
  icon,
  input,
}: Readonly<{
  label: string;
  error?: string;
  icon: ReactNode;
  input: ReactNode;
}>) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-medium text-[#58514b]">{label}</span>
      <div className="flex items-center gap-3 rounded-xl border border-[#d8cfc7] bg-white px-4 py-3 shadow-[0_12px_30px_rgba(61,48,38,0.04)]">
        {icon}
        {input}
      </div>
      {error ? <p className="mt-2 text-xs text-[#d63e57]">{error}</p> : null}
    </label>
  );
}
