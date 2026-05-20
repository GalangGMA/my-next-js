export function DataTableSummary({
  left,
  right,
}: Readonly<{
  left: string;
  right: string;
}>) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 rounded-[20px] border border-[#e3d9d1] bg-[#fcfaf7] px-4 py-3 text-xs text-[#766e67]">
      <span>{left}</span>
      <span>{right}</span>
    </div>
  );
}
