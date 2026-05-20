import { PageHeader } from "@/components/shared/page-header";
import { MetricCard } from "@/components/shared/metric-card";
import { PanelCard } from "@/components/shared/panel-card";
import { StatusBadge } from "@/components/shared/status-badge";

type Metric = {
  label: string;
  value: string;
  change: string;
  tone?: "up" | "down";
};

type ListRow = {
  title: string;
  subtitle: string;
  meta: string;
  status: "Active" | "Pending" | "Completed" | "Suspended" | "Inactive" | "Refunded";
};

export function EntityOverviewPage({
  title,
  subtitle,
  searchPlaceholder,
  metrics,
  sectionTitle,
  sectionDescription,
  listTitle,
  listRows,
  asideTitle,
  asideItems,
}: Readonly<{
  title: string;
  subtitle: string;
  searchPlaceholder: string;
  metrics: Metric[];
  sectionTitle: string;
  sectionDescription: string;
  listTitle: string;
  listRows: ListRow[];
  asideTitle: string;
  asideItems: { title: string; description: string }[];
}>) {
  return (
    <div className="min-h-screen">
      <PageHeader title={title} subtitle={subtitle} searchPlaceholder={searchPlaceholder} />
      <section className="space-y-5 p-4 sm:p-6 lg:p-8">
        <div className="grid gap-4 lg:grid-cols-4">
          {metrics.map((metric) => (
            <MetricCard key={metric.label} change={metric.change} label={metric.label} tone={metric.tone} value={metric.value} valueClassName="text-[32px]" />
          ))}
        </div>

        <div className="grid gap-5 xl:grid-cols-[minmax(0,1.5fr)_minmax(320px,0.8fr)]">
          <PanelCard className="overflow-hidden rounded-[26px]">
            <div className="border-b border-[#e5dcd4] px-6 py-6 sm:px-7">
              <h2 className="font-display text-[26px] text-[#1f1d1d]">{sectionTitle}</h2>
              <p className="mt-2.5 max-w-2xl text-[14px] leading-7 text-[#766e67]">{sectionDescription}</p>
            </div>
            <div className="grid gap-4 px-6 py-6 sm:px-7">
              <div className="grid gap-4 md:grid-cols-3">
                {asideItems.slice(0, 3).map((item) => (
                  <div key={item.title} className="rounded-[20px] border border-[#e5dcd4] bg-[#fcfaf7] p-4">
                    <p className="text-[15px] font-semibold text-[#1f1d1d]">{item.title}</p>
                    <p className="mt-2 text-xs leading-6 text-[#857c75]">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-[22px] border border-dashed border-[#d9cfc7] bg-[#faf6f2] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#958c84]">Operating Note</p>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-[#6f6760]">
                  This page is ready to receive repository-backed data and action handlers while preserving the same premium layout system as the screenshot-matched core pages.
                </p>
              </div>
            </div>
          </PanelCard>

          <PanelCard className="rounded-[26px] px-6 py-6 sm:px-7">
            <h2 className="font-display text-[24px] text-[#1f1d1d]">{asideTitle}</h2>
            <div className="mt-5 space-y-4">
              {asideItems.map((item) => (
                <div key={item.title} className="rounded-[20px] border border-[#e5dcd4] bg-[#fcfaf7] p-4">
                  <p className="text-[15px] font-semibold text-[#1f1d1d]">{item.title}</p>
                  <p className="mt-2 text-xs leading-6 text-[#857c75]">{item.description}</p>
                </div>
              ))}
            </div>
          </PanelCard>
        </div>

        <PanelCard className="overflow-hidden rounded-[26px]">
          <div className="border-b border-[#e5dcd4] px-6 py-6 sm:px-7">
            <h2 className="font-display text-[26px] text-[#1f1d1d]">{listTitle}</h2>
          </div>
          <div className="divide-y divide-[#ece4dc] px-6 sm:px-7">
            {listRows.map((row) => (
              <div key={row.title} className="flex flex-col gap-4 py-5 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-[17px] font-semibold text-[#1b1919]">{row.title}</p>
                  <p className="mt-1.5 text-sm text-[#7a726b]">{row.subtitle}</p>
                </div>
                <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-6">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9c938b]">{row.meta}</span>
                  <StatusBadge tone={row.status} />
                </div>
              </div>
            ))}
          </div>
        </PanelCard>
      </section>
    </div>
  );
}
