import { authRepository } from "@/features/auth/repositories/auth.repository";
import type { LoginFormValues } from "@/features/auth/validations/login-schema";

export const authService = {
  async login(credentials: LoginFormValues) {
    return authRepository.login(credentials);
  },
};
