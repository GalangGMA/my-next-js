import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f7f3ef] px-6">
      <div className="app-panel w-full max-w-2xl rounded-[30px] px-8 py-10 text-center sm:px-12 sm:py-14">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9a9188]">404</p>
        <h1 className="font-display mt-4 text-[42px] leading-none text-[#1f1d1d] sm:text-[54px]">Page not found</h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-8 text-[#7a726b] sm:text-base">
          The page you are looking for does not exist or has been moved to a different workspace route.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link className="rounded-xl bg-[#4a56b4] px-5 py-3 text-sm font-semibold text-white" href="/">
            Back to dashboard
          </Link>
          <Link className="rounded-xl border border-[#ddd3ca] bg-[#fffdfa] px-5 py-3 text-sm font-semibold text-[#4c4641]" href="/messages">
            Open messages
          </Link>
        </div>
      </div>
    </main>
  );
}
