import { OperationsTablePage } from "@/components/shared/operations-table-page";
import { usersPageData } from "@/features/users/data/users-page-data";

export function UsersPage() {
  return (
    <OperationsTablePage
      title="Users"
      subtitle="Manage employee access, onboarding, and lifecycle updates"
      searchPlaceholder="Search users..."
      metrics={usersPageData.metrics}
      filters={usersPageData.filters}
      columns={usersPageData.columns}
      rows={usersPageData.rows}
    />
  );
}
