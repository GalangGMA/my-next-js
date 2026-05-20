"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Box,
  Briefcase,
  ChartColumn,
  ChartNoAxesCombined,
  CircleHelp,
  CreditCard,
  FileText,
  LayoutGrid,
  MessageSquare,
  Receipt,
  Settings,
  Shield,
  Ticket,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { NavigationItem } from "@/types/admin";

const iconMap = {
  box: Box,
  briefcase: Briefcase,
  "chart-column": ChartColumn,
  "chart-no-axes-line": ChartNoAxesCombined,
  "circle-help": CircleHelp,
  "credit-card": CreditCard,
  "file-text": FileText,
  "layout-grid": LayoutGrid,
  "message-square": MessageSquare,
  receipt: Receipt,
  settings: Settings,
  shield: Shield,
  ticket: Ticket,
  users: Users,
} as const;

export function NavigationLink({
  item,
  compact = false,
}: Readonly<{
  item: NavigationItem;
  compact?: boolean;
}>) {
  const pathname = usePathname();
  const isActive = pathname === item.href;
  const Icon = iconMap[item.icon];

  return (
    <Link
      className={cn(
        "group flex items-center gap-3 rounded-2xl text-[#5f5750]",
        compact
          ? "min-w-fit border px-3 py-2 text-sm"
          : "px-4 py-3 text-[15px] font-medium",
        isActive
          ? "bg-[#ececf6] text-[#4a56b4] shadow-[inset_3px_0_0_#4a56b4]"
          : "hover:bg-white/80 hover:text-[#2a2725]"
      )}
      href={item.href}
    >
      <Icon className={cn("h-4.5 w-4.5", compact && "h-4 w-4")} strokeWidth={1.8} />
      <span className="whitespace-nowrap">{item.label}</span>
    </Link>
  );
}
