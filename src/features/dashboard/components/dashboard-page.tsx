import { DashboardView } from "@/features/dashboard/components/dashboard-view";
import type { DashboardPageData } from "@/types/admin";

export function DashboardPage({ data }: Readonly<{ data: DashboardPageData }>) {
  return <DashboardView data={data} />;
}
