import { OperationsTablePage } from "@/components/shared/operations-table-page";
import { ordersPageData } from "@/features/orders/data/orders-page-data";

export function OrdersPage() {
  return (
    <OperationsTablePage
      title="Orders"
      subtitle="Track fulfillment velocity, exceptions, and high-value transactions"
      searchPlaceholder="Search orders..."
      metrics={ordersPageData.metrics}
      filters={ordersPageData.filters}
      columns={ordersPageData.columns}
      rows={ordersPageData.rows}
    />
  );
}
