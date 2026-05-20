import { CustomersPage } from "@/features/customers/components/customers-page";
import { customersService } from "@/features/customers/services/customers.service";

export default async function CustomersRoute() {
  const customersData = await customersService.getCustomersPageData();

  return <CustomersPage data={customersData} />;
}
