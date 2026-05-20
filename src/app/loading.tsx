export default function RootLoading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f7f3ef] px-6">
      <div className="app-panel w-full max-w-xl rounded-[28px] px-8 py-10 text-center">
        <div className="mx-auto h-12 w-12 animate-pulse rounded-2xl bg-[#4a56b4]/14" />
        <p className="font-display mt-6 text-[28px] text-[#1f1d1d]">Loading workspace</p>
        <p className="mt-3 text-sm leading-7 text-[#7a726b]">Preparing the admin dashboard and syncing the latest view.</p>
        <div className="mt-8 h-2 overflow-hidden rounded-full bg-[#ece3db]">
          <div className="h-full w-2/3 animate-pulse rounded-full bg-[#4a56b4]" />
        </div>
      </div>
    </main>
  );
}
