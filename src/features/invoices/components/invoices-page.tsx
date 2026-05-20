import { OperationsTablePage } from "@/components/shared/operations-table-page";
import { invoicesPageData } from "@/features/invoices/data/invoices-page-data";

export function InvoicesPage() {
  return (
    <OperationsTablePage
      title="Invoices"
      subtitle="Billing operations for issued documents, collections, and reconciliation"
      searchPlaceholder="Search invoices..."
      metrics={invoicesPageData.metrics}
      filters={invoicesPageData.filters}
      columns={invoicesPageData.columns}
      rows={invoicesPageData.rows}
    />
  );
}
