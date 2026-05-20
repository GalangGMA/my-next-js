import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { PanelCard } from "@/components/shared/panel-card";

export function MetricCard({
  label,
  value,
  change,
  tone = "up",
  valueClassName,
  className,
  trailing,
}: Readonly<{
  label: string;
  value: string;
  change?: string;
  tone?: "up" | "down";
  valueClassName?: string;
  className?: string;
  trailing?: ReactNode;
}>) {
  const changeBadge = change ? (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold",
        tone === "up" ? "bg-[#eaf9ee] text-[#17a06d]" : "bg-[#fff0f2] text-[#ef4e5b]"
      )}
    >
      <ArrowUpRight className={cn("h-3.5 w-3.5", tone === "down" && "rotate-90")} />
      {change}
    </span>
  ) : null;

  return (
    <PanelCard className={cn("px-5 py-5", className)}>
      <div className="flex items-start justify-between gap-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#938a82]">{label}</p>
        {trailing ?? changeBadge}
      </div>
      <p className={cn("font-display mt-4 text-[30px] leading-none text-[#1f1d1c]", valueClassName)}>{value}</p>
      {change && !trailing ? (
        <p className={cn("mt-3 text-xs font-semibold", tone === "down" ? "text-[#ef4e5b]" : "text-[#17a06d]")}>{change}</p>
      ) : null}
    </PanelCard>
  );
}
