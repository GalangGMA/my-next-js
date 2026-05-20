import { Bell, Search } from "lucide-react";

export function PageHeader({
  title,
  subtitle,
  searchPlaceholder,
}: Readonly<{
  title: string;
  subtitle: string;
  searchPlaceholder: string;
}>) {
  return (
    <header className="border-b border-[#ddd3ca] bg-[#fbf8f4] px-4 py-4 sm:px-6 lg:px-8 lg:py-3.5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="font-display text-[32px] leading-none text-[#1f1d1d] sm:text-[38px]">{title}</h1>
          <p className="mt-1.5 text-sm text-[#8b837b] sm:text-[15px]">{subtitle}</p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <label className="flex h-11 min-w-0 items-center gap-3 rounded-xl border border-[#ddd3ca] bg-[#fffdfa] px-3.5 shadow-[0_12px_30px_rgba(52,43,36,0.04)] sm:w-[300px] lg:w-[330px]">
            <Search className="h-4 w-4 text-[#8b837b]" strokeWidth={1.7} />
            <input
              className="w-full border-0 bg-transparent text-sm text-[#2a2827] outline-none placeholder:text-[#9b938b]"
              placeholder={searchPlaceholder}
              type="search"
            />
          </label>

          <button className="grid h-11 w-11 place-items-center rounded-full border border-[#ddd3ca] bg-[#fffdfa] text-[#5d5650] shadow-[0_12px_30px_rgba(52,43,36,0.04)]">
            <div className="relative">
              <Bell className="h-4 w-4" strokeWidth={1.7} />
              <span className="absolute -right-1 -top-1 grid h-4 min-w-4 place-items-center rounded-full bg-[#4a56b4] px-1 text-[9px] font-semibold text-white">
                3
              </span>
            </div>
          </button>

          <div className="grid h-11 w-11 place-items-center rounded-full border border-[#ddd3ca] bg-[radial-gradient(circle_at_35%_35%,#ffedd7_0,#f1d2c2_28%,#7d0a2a_30%,#7d0a2a_48%,#2d1e1e_100%)] shadow-[0_12px_30px_rgba(52,43,36,0.04)]" />
        </div>
      </div>
    </header>
  );
}
