"use client";

import { useEffect } from "react";

export default function DashboardError({
  error,
  reset,
}: Readonly<{
  error: Error & { digest?: string };
  reset: () => void;
}>) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#f7f3ef] p-4 sm:p-6 lg:p-8">
      <div className="app-panel mx-auto max-w-3xl rounded-[28px] px-8 py-10 text-center sm:px-10 sm:py-12">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9a9188]">Dashboard Error</p>
        <h1 className="font-display mt-4 text-[34px] leading-none text-[#1f1d1d] sm:text-[42px]">This workspace view failed to load</h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-[#7a726b] sm:text-base">
          The current page hit an unexpected rendering issue. Retry to restore the view without leaving the dashboard.
        </p>
        <button className="mt-8 rounded-xl bg-[#4a56b4] px-5 py-3 text-sm font-semibold text-white" onClick={reset}>
          Reload view
        </button>
      </div>
    </div>
  );
}
