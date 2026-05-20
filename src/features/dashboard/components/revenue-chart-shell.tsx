"use client";

import dynamic from "next/dynamic";
import type { RevenuePoint } from "@/types/admin";

const RevenueChart = dynamic(
  () => import("@/features/dashboard/components/revenue-chart").then((module) => module.RevenueChart),
  {
    ssr: false,
    loading: () => <div className="h-[360px] animate-pulse rounded-[24px] bg-[#f3ece7] pt-6 lg:h-[420px]" />,
  }
);

export function RevenueChartShell({ data }: Readonly<{ data: RevenuePoint[] }>) {
  return <RevenueChart data={data} />;
}
