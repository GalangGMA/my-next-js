import { CustomersTable } from "@/features/customers/components/customers-table";
import { PageHeader } from "@/components/shared/page-header";
import type { CustomersPageData } from "@/types/admin";

export function CustomersView({ data }: Readonly<{ data: CustomersPageData }>) {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Customers"
        subtitle="Manage and monitor your customer accounts"
        searchPlaceholder="Search customers..."
      />

      <section className="p-5 sm:p-7 lg:p-10">
        <CustomersTable customers={data.customers} />
      </section>
    </div>
  );
}
