import { PageHeader } from "@/components/shared/page-header";

export function PlaceholderPage({
  eyebrow,
  title,
  description,
  metrics,
}: Readonly<{
  eyebrow: string;
  title: string;
  description: string;
  metrics: { label: string; value: string }[];
}>) {
  return (
    <div className="min-h-screen">
      <PageHeader title={title} subtitle={description} searchPlaceholder={`Search ${title.toLowerCase()}...`} />
      <section className="p-5 sm:p-7 lg:p-10">
        <div className="app-panel overflow-hidden rounded-[30px]">
          <div className="grid gap-10 px-6 py-8 sm:px-8 lg:grid-cols-[1.3fr_0.7fr] lg:px-10 lg:py-10">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-[#90877f]">{eyebrow}</p>
              <h2 className="font-display mt-5 text-5xl leading-none text-[#201d1c] lg:text-6xl">{title}</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#746d67]">{description}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {metrics.map((metric) => (
                <div key={metric.label} className="rounded-[26px] border border-[#ddd3ca] bg-[#fcfaf7] px-5 py-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-[#978f87]">{metric.label}</p>
                  <p className="font-display mt-4 text-4xl text-[#1f1d1c]">{metric.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="subtle-grid border-t border-[#e1d7cf] px-6 py-10 sm:px-8 lg:px-10">
            <div className="rounded-[28px] border border-dashed border-[#d5cbc3] bg-[#fffdfa]/80 p-8 text-[#756d67] backdrop-blur-sm">
              This section is intentionally staged as a premium placeholder so the broader admin system stays cohesive while the core screenshot-driven pages remain the primary focus.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
