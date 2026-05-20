import { cn } from "@/lib/utils";

const styles = {
  Active: "bg-[#ebfbf1] text-[#17a06d] border-[#c4efd5]",
  Completed: "bg-[#ebfbf1] text-[#17a06d] border-[#c4efd5]",
  Pending: "bg-[#fff5e6] text-[#e38a1d] border-[#f7ddb0]",
  Suspended: "bg-[#fff0f0] text-[#ef4e5b] border-[#f4c4c9]",
  Inactive: "bg-[#f3f4f6] text-[#7b8394] border-[#dde1e8]",
  Refunded: "bg-[#f4f2ff] text-[#5e62c8] border-[#d8d6ff]",
} as const;

export function StatusBadge({
  tone,
  dot = true,
}: Readonly<{
  tone: keyof typeof styles;
  dot?: boolean;
}>) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold",
        styles[tone]
      )}
    >
      {dot ? <span className="h-2 w-2 rounded-full bg-current/90" /> : null}
      {tone}
    </span>
  );
}
