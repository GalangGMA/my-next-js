import Link from "next/link";
import { BadgeCheck, ShieldCheck } from "lucide-react";
import { LoginForm } from "@/features/auth/components/login-form";

export function LoginPage() {
  return (
    <main className="flex min-h-screen bg-[#f5efe9] p-4 lg:p-6">
      <div className="app-panel mx-auto grid w-full max-w-5xl overflow-hidden rounded-[28px] lg:grid-cols-[1.08fr_0.92fr]">
        <section className="relative hidden min-h-[700px] overflow-hidden bg-[#474fb0] p-8 text-white lg:flex lg:flex-col lg:justify-between">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.1),transparent_28%)]" />
          <div>
            <div className="relative mb-8 flex items-center gap-3 text-lg font-semibold">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/14">V</span>
              Vela Admin
            </div>
            <p className="max-w-md text-xs uppercase tracking-[0.28em] text-white/70">Enterprise workspace</p>
            <h1 className="font-display mt-5 max-w-lg text-[44px] leading-none">Admin experience crafted from the provided reference UI.</h1>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {["Secure access policies", "Unified operations hub", "Premium workspace UI"].map((label) => (
                <span key={label} className="rounded-full border border-white/18 bg-white/10 px-3 py-1.5 text-xs text-white/84">
                  {label}
                </span>
              ))}
            </div>
          </div>
          <div className="relative space-y-5 rounded-[24px] border border-white/16 bg-white/10 p-6 backdrop-blur-sm">
            <p className="text-sm text-white/72">Access shared dashboards, customer operations, and message threads in one calm, high-contrast workspace.</p>
            <div className="grid gap-4 sm:grid-cols-3">
              {[["99.98%", "uptime"], ["24", "live boards"], ["8.2m", "events/day"]].map(([value, label]) => (
                <div key={label} className="rounded-xl border border-white/14 bg-black/10 p-3.5">
                  <div className="text-xl font-semibold">{value}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/70">{label}</div>
                </div>
              ))}
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-white/14 bg-black/10 p-3.5">
                <div className="flex items-center gap-2 text-xs font-semibold text-white">
                  <ShieldCheck className="h-4 w-4" />
                  Security posture
                </div>
                <p className="mt-2.5 text-xs leading-6 text-white/72">2FA enforced, device review enabled, and admin alerts routed in real time.</p>
              </div>
              <div className="rounded-xl border border-white/14 bg-black/10 p-3.5">
                <div className="flex items-center gap-2 text-xs font-semibold text-white">
                  <BadgeCheck className="h-4 w-4" />
                  Team readiness
                </div>
                <p className="mt-2.5 text-xs leading-6 text-white/72">Live dashboards, customer workflows, and message queues stay synchronized.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="flex min-h-[700px] flex-col justify-center bg-[#fffdfa] p-6 sm:p-8 lg:p-10">
          <div className="mx-auto w-full max-w-md">
            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.28em] text-[#8a8178]">Welcome back</p>
              <h2 className="font-display mt-3 text-[38px] text-[#1f1c1c]">Login</h2>
              <p className="mt-3 text-sm leading-7 text-[#746d67]">Sign in to continue to the Vela admin workspace.</p>
            </div>

            <LoginForm />

            <div className="mt-6 rounded-[20px] border border-[#ddd3ca] bg-[#f7f1eb] px-4 py-4 text-xs text-[#6e6760]">
              <div className="flex items-center justify-between gap-4">
                <span>Need a preview first?</span>
                <Link className="font-medium text-[#4a56b4]" href="/">
                  Open dashboard
                </Link>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-[#e0d6ce] bg-white/75 px-4 py-3">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-[#9b9289]">Demo Email</p>
                  <p className="mt-1.5 text-sm font-medium text-[#2a2827]">admin@vela.io</p>
                </div>
                <div className="rounded-xl border border-[#e0d6ce] bg-white/75 px-4 py-3">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-[#9b9289]">Demo Password</p>
                  <p className="mt-1.5 text-sm font-medium text-[#2a2827]">vela-demo</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
