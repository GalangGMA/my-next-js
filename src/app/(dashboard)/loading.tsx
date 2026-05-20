export default function DashboardLoading() {
  return (
    <div className="min-h-screen bg-[#f7f3ef] p-4 sm:p-6 lg:p-8">
      <div className="space-y-4">
        <div className="h-16 w-56 animate-pulse rounded-[20px] bg-[#ece3db]" />
        <div className="grid gap-4 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="app-panel h-32 animate-pulse rounded-[24px] bg-[#fcfaf7]" />
          ))}
        </div>
        <div className="grid gap-4 xl:grid-cols-[1.8fr_1fr]">
          <div className="app-panel h-[360px] animate-pulse rounded-[24px] bg-[#fcfaf7]" />
          <div className="app-panel h-[360px] animate-pulse rounded-[24px] bg-[#fcfaf7]" />
        </div>
        <div className="app-panel h-[280px] animate-pulse rounded-[24px] bg-[#fcfaf7]" />
      </div>
    </div>
  );
}
