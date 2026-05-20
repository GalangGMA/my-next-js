"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, LockKeyhole, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { FormCheckboxField } from "@/components/forms/form-checkbox-field";
import { FormTextField } from "@/components/forms/form-text-field";
import { authService } from "@/features/auth/services/auth.service";
import { loginSchema, type LoginFormInput, type LoginFormValues } from "@/features/auth/validations/login-schema";

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<LoginFormInput, undefined, LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "admin@vela.io",
      password: "vela-demo",
      rememberMe: true,
    },
  });

  const onSubmit = handleSubmit(async (values) => {
    await authService.login(values);
  });

  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      <div className="grid gap-3 sm:grid-cols-2">
        <button className="rounded-xl border border-[#d8cfc7] bg-white px-4 py-2.5 text-xs font-semibold text-[#4b453f] shadow-[0_12px_30px_rgba(61,48,38,0.04)]" type="button">
          Continue with Google
        </button>
        <button className="rounded-xl border border-[#d8cfc7] bg-white px-4 py-2.5 text-xs font-semibold text-[#4b453f] shadow-[0_12px_30px_rgba(61,48,38,0.04)]" type="button">
          Continue with SSO
        </button>
      </div>

      <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-[#9a9188]">
        <span className="h-px flex-1 bg-[#e5dcd4]" />
        or sign in with email
        <span className="h-px flex-1 bg-[#e5dcd4]" />
      </div>

      <FormTextField
        error={errors.email?.message}
        icon={<Mail className="h-4 w-4 text-[#8a8178]" />}
        input={<input className="w-full border-0 bg-transparent text-sm text-[#1f1c1c] outline-none" type="email" {...register("email")} />}
        label="Email"
      />

      <FormTextField
        error={errors.password?.message}
        icon={<LockKeyhole className="h-4 w-4 text-[#8a8178]" />}
        input={<input className="w-full border-0 bg-transparent text-sm text-[#1f1c1c] outline-none" type="password" {...register("password")} />}
        label="Password"
      />

      <div className="flex items-center justify-between text-xs">
        <FormCheckboxField input={<input className="h-4 w-4 rounded border-[#d1c5bc]" type="checkbox" {...register("rememberMe")} />}>
          Remember me
        </FormCheckboxField>
        <Link className="text-[#4a56b4]" href="/">
          Forgot password
        </Link>
      </div>

      <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#4a56b4] px-5 py-3 text-sm font-semibold text-white shadow-[0_20px_40px_rgba(74,86,180,0.24)] hover:bg-[#424ca9] disabled:opacity-70" disabled={isSubmitting} type="submit">
        {isSubmitting ? "Signing in..." : "Sign in"}
        <ArrowRight className="h-3.5 w-3.5" />
      </button>

      {isSubmitSuccessful ? <p className="text-xs text-[#17a06d]">Validation passed. Auth flow is ready for backend integration.</p> : null}
    </form>
  );
}
