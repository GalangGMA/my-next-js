import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { NavigationLink } from "@/components/navigation/navigation-link";
import { navigationItems } from "@/constants/navigation";

const sectionLabels = ["MAIN", "ANALYTICS", "SETTINGS"] as const;

export function Sidebar() {
  return (
    <aside className="flex border-r border-[#d9d0c8] bg-[#f9f5f0] lg:h-screen lg:flex-col lg:overflow-hidden">
      <div className="hidden h-full min-h-0 w-full flex-1 flex-col lg:flex">
        <div className="border-b border-[#ddd3ca] px-6 py-5">
          <Link className="flex items-center gap-3 text-[18px] text-[#1d1c1d]" href="/">
            <span className="grid h-10 w-10 place-items-center rounded-[16px] bg-[#4a56b4] text-base font-semibold text-white shadow-[0_16px_32px_rgba(74,86,180,0.25)]">
              V
            </span>
            <span className="font-display text-[32px] leading-none">Vela</span>
          </Link>
        </div>

        <nav className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-6">
          {sectionLabels.map((section) => (
            <div key={section} className="mb-8 last:mb-0">
              <p className="px-4 text-[10px] font-semibold tracking-[0.25em] text-[#999087]">{section}</p>
              <div className="mt-3 space-y-1">
                {navigationItems
                  .filter((item) => item.section === section)
                  .map((item) => (
                    <NavigationLink key={item.href} item={item} />
                  ))}
              </div>
            </div>
          ))}
        </nav>

        <div className="mt-auto border-t border-[#ddd3ca] px-4 py-4">
          <div className="flex items-center gap-3 rounded-[18px] bg-white/70 px-3.5 py-3.5">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-[#d8daf0] text-xs font-semibold text-[#4a56b4]">
              JD
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[15px] font-semibold text-[#1d1b1c]">Jane Doe</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#8b837b]">Admin role</p>
            </div>
            <div className="rounded-full border border-[#ddd3ca] p-2 text-[#8b837b]">
              <ExternalLink className="h-3.5 w-3.5" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full border-b border-[#ddd3ca] bg-[#f9f5f0] px-4 py-4 lg:hidden">
        <div className="mb-4 flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#4a56b4] text-sm font-semibold text-white">V</span>
          <span className="font-display text-3xl leading-none">Vela</span>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1">
          {navigationItems.map((item) => (
            <NavigationLink compact key={item.href} item={item} />
          ))}
        </div>
      </div>
    </aside>
  );
}
