import { describe, expect, it } from "vitest";
import { loginSchema } from "@/features/auth/validations/login-schema";

describe("loginSchema", () => {
  it("accepts valid credentials", () => {
    const result = loginSchema.safeParse({
      email: "admin@vela.io",
      password: "vela-demo",
      rememberMe: true,
    });

    expect(result.success).toBe(true);
  });

  it("rejects invalid email", () => {
    const result = loginSchema.safeParse({
      email: "invalid",
      password: "vela-demo",
      rememberMe: true,
    });

    expect(result.success).toBe(false);
  });
});
