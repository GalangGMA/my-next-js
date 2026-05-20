import { describe, expect, it } from "vitest";
import { customersService } from "@/features/customers/services/customers.service";

describe("customersService", () => {
  it("sorts selected customers first", async () => {
    const result = await customersService.getCustomersPageData();

    expect(result.customers[0]?.selected).toBe(true);
    expect(result.customers[1]?.selected).toBe(true);
  });
});
