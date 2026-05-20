import { dashboardRepository } from "@/features/dashboard/repositories/dashboard.repository";

export const dashboardService = {
  async getDashboardData() {
    return dashboardRepository.getDashboardData();
  },
};
