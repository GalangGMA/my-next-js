import { customersRepository } from "@/features/customers/repositories/customers.repository";

export const customersService = {
  async getCustomersPageData() {
    const data = customersRepository.getCustomersPageData();

    return {
      ...data,
      customers: [...data.customers].sort((left, right) => Number(Boolean(right.selected)) - Number(Boolean(left.selected))),
    };
  },
};
