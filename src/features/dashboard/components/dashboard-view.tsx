import { ArrowUpRight, Ellipsis, MoveRight } from "lucide-react";
import { DataTable } from "@/components/shared/data-table";
import { MetricCard } from "@/components/shared/metric-card";
import { PanelCard } from "@/components/shared/panel-card";
import { PageHeader } from "@/components/shared/page-header";
import { StatusBadge } from "@/components/shared/status-badge";
import { RevenueChartShell } from "@/features/dashboard/components/revenue-chart-shell";
import { cn } from "@/lib/utils";
import type { DashboardPageData } from "@/types/admin";

export function DashboardView({ data }: Readonly<{ data: DashboardPageData }>) {
  return (
    <div className="min-h-screen">
      <PageHeader title="Dashboard" subtitle="Wednesday, 18 June 2025" searchPlaceholder="Search..." />

      <section className="space-y-6 p-4 sm:p-6 lg:p-8">
        <div className="grid gap-4 xl:grid-cols-[1.8fr_repeat(3,minmax(0,1fr))]">
          {data.stats.map((stat) => (
            <MetricCard
              key={stat.title}
              label={stat.title}
              tone={stat.trend}
              value={stat.value}
              valueClassName="mt-7 text-[38px]"
              trailing={
                <span
                  className={cn(
                    "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold",
                    stat.trend === "up" ? "bg-[#eaf9ee] text-[#17a06d]" : "bg-[#fff0f2] text-[#ef4e5b]"
                  )}
                >
                  <ArrowUpRight className={cn("h-3.5 w-3.5", stat.trend === "down" && "rotate-90")} />
                  {stat.change}
                </span>
              }
            />
          ))}
        </div>

        <div className="grid gap-5 2xl:grid-cols-[minmax(0,1.9fr)_minmax(320px,0.9fr)]">
          <PanelCard className="px-5 py-5 sm:px-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="font-display text-[22px] text-[#1f1d1d] sm:text-[26px]">Revenue Overview</h2>
                <p className="mt-1.5 text-sm text-[#8b837b]">Performance over the last 12 months</p>
              </div>
              <button className="h-10 rounded-xl border border-[#ddd3ca] bg-[#faf6f2] px-4 text-sm font-semibold text-[#2a2826]">
                2025
              </button>
            </div>
            <RevenueChartShell data={data.revenue} />
          </PanelCard>

          <PanelCard className="px-5 py-5 sm:px-6">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-[22px] text-[#1f1d1d] sm:text-[26px]">Top Products</h2>
              <button className="text-[#989088]">
                <Ellipsis className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-6 divide-y divide-[#e6ddd5]">
              {data.topProducts.map((product) => (
                <div key={product.name} className="flex items-center justify-between gap-4 py-5 first:pt-0 last:pb-0">
                  <div>
                    <p className="text-[15px] font-semibold text-[#1d1b1b]">{product.name}</p>
                    <span className="mt-2 inline-flex rounded-lg bg-[#f4efea] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8f857d]">
                      {product.category}
                    </span>
                  </div>
                  <p className="font-display text-[22px] text-[#2a2726]">{product.value}</p>
                </div>
              ))}
            </div>
          </PanelCard>
        </div>

        <DataTable
          className="overflow-hidden rounded-[24px]"
          columns={[
            { key: "id", label: "Transaction ID", className: "px-5 sm:px-6" },
            { key: "customer", label: "Customer", className: "px-5 sm:px-6" },
            { key: "date", label: "Date", className: "px-5 sm:px-6" },
            { key: "amount", label: "Amount", className: "px-5 sm:px-6" },
            { key: "status", label: "Status", className: "px-5 sm:px-6" },
          ]}
          header={
            <div className="flex flex-col gap-3 border-b border-[#e3d9d1] px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <h2 className="font-display text-[24px] text-[#1f1d1d]">Recent Transactions</h2>
              <a className="inline-flex items-center gap-2 text-sm font-semibold text-[#4a56b4]" href="/transactions">
                View all transactions
                <MoveRight className="h-3.5 w-3.5" />
              </a>
            </div>
          }
        >
          {data.transactions.map((transaction) => (
            <tr key={transaction.id} className="border-t border-[#eee6de] text-[14px] text-[#2b2827]">
              <td className="px-5 py-5 font-medium sm:px-6">{transaction.id}</td>
              <td className="px-5 py-5 font-semibold text-[#1d1b1b] sm:px-6">{transaction.customer}</td>
              <td className="px-5 py-5 text-[#6f6760] sm:px-6">{transaction.date}</td>
              <td className="px-5 py-5 font-medium sm:px-6">{transaction.amount}</td>
              <td className="px-5 py-5 sm:px-6">
                <StatusBadge tone={transaction.status} />
              </td>
            </tr>
          ))}
        </DataTable>
      </section>
    </div>
  );
}
