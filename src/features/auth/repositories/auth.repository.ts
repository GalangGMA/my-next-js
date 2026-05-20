import type { LoginFormValues } from "@/features/auth/validations/login-schema";

export const authRepository = {
  async login(credentials: LoginFormValues) {
    await new Promise((resolve) => setTimeout(resolve, 400));

    return {
      email: credentials.email,
      rememberMe: credentials.rememberMe,
      status: "success" as const,
    };
  },
};
