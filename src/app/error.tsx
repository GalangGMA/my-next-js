"use client";

import { useEffect } from "react";

export default function RootError({
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
    <main className="flex min-h-screen items-center justify-center bg-[#f7f3ef] px-6">
      <div className="app-panel w-full max-w-2xl rounded-[30px] px-8 py-10 text-center sm:px-12 sm:py-14">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9a9188]">Something went wrong</p>
        <h1 className="font-display mt-4 text-[40px] leading-none text-[#1f1d1d] sm:text-[50px]">Unable to render this view</h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-8 text-[#7a726b] sm:text-base">
          An unexpected issue interrupted the current admin session. You can retry this route safely.
        </p>
        <button className="mt-8 rounded-xl bg-[#4a56b4] px-5 py-3 text-sm font-semibold text-white" onClick={reset}>
          Try again
        </button>
      </div>
    </main>
  );
}
