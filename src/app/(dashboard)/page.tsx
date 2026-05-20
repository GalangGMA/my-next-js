import { DashboardPage } from "@/features/dashboard/components/dashboard-page";
import { dashboardService } from "@/features/dashboard/services/dashboard.service";

export default async function Home() {
  const dashboardData = await dashboardService.getDashboardData();

  return <DashboardPage data={dashboardData} />;
}
