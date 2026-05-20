import { CustomersView } from "@/features/customers/components/customers-view";
import type { CustomersPageData } from "@/types/admin";

export function CustomersPage({ data }: Readonly<{ data: CustomersPageData }>) {
  return <CustomersView data={data} />;
}
