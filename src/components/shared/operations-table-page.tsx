"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { DataTable } from "@/components/shared/data-table";
import { DataTableSummary } from "@/components/shared/data-table-summary";
import { DataTableToolbar, DataTableToolbarChips, DataTableToolbarSearch } from "@/components/shared/data-table-toolbar";
import { MetricCard } from "@/components/shared/metric-card";
import { PageHeader } from "@/components/shared/page-header";
import { StatusBadge } from "@/components/shared/status-badge";

type SummaryMetric = {
  label: string;
  value: string;
  change: string;
};

type DataRow = {
  name: string;
  secondary: string;
  tertiary?: string;
  filter: string;
  status: "Active" | "Pending" | "Completed" | "Suspended" | "Inactive" | "Refunded";
  cells: readonly string[];
};

const PAGE_SIZE = 3;

export function OperationsTablePage({
  title,
  subtitle,
  searchPlaceholder,
  metrics,
  filters,
  columns,
  rows,
}: Readonly<{
  title: string;
  subtitle: string;
  searchPlaceholder: string;
  metrics: readonly SummaryMetric[];
  filters: readonly string[];
  columns: readonly string[];
  rows: readonly DataRow[];
}>) {
  const [activeFilter, setActiveFilter] = useState(filters[0] ?? "All");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const filteredRows = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return rows.filter((row) => {
      const matchesFilter = activeFilter === filters[0] || row.filter === activeFilter;
      const haystack = [row.name, row.secondary, row.tertiary ?? "", ...row.cells].join(" ").toLowerCase();
      const matchesQuery = !normalizedQuery || haystack.includes(normalizedQuery);

      return matchesFilter && matchesQuery;
    });
  }, [activeFilter, filters, query, rows]);

  const totalPages = Math.max(1, Math.ceil(filteredRows.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const paginatedRows = filteredRows.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  function handleFilterChange(filter: string) {
    setActiveFilter(filter);
    setPage(1);
  }

  function handleQueryChange(value: string) {
    setQuery(value);
    setPage(1);
  }

  return (
    <div className="min-h-screen">
      <PageHeader title={title} subtitle={subtitle} searchPlaceholder={searchPlaceholder} />

      <section className="space-y-5 p-4 sm:p-6 lg:p-8">
        <div className="grid gap-4 lg:grid-cols-4">
          {metrics.map((metric) => (
            <MetricCard key={metric.label} change={metric.change} label={metric.label} value={metric.value} />
          ))}
        </div>

        <DataTableToolbar>
          <DataTableToolbarChips activeItem={activeFilter} items={filters} onChange={handleFilterChange} />
          <DataTableToolbarSearch
            icon={<Search className="h-3.5 w-3.5 text-[#8d847c]" />}
            onChange={handleQueryChange}
            placeholder={`Filter ${title.toLowerCase()}...`}
            value={query}
          />
        </DataTableToolbar>

        <DataTableSummary
          left={`Showing ${paginatedRows.length} of ${filteredRows.length} matching rows`}
          right={`Filter: ${activeFilter} / Page ${currentPage} of ${totalPages}`}
        />

        <DataTable
          columns={[
            { key: "overview", label: "Overview", className: "px-6" },
            ...columns.map((column) => ({ key: column, label: column })),
            { key: "status", label: "Status" },
          ]}
          footer={
            <div className="flex items-center justify-between">
              <span>{filteredRows.length} total matches</span>
              <div className="flex items-center gap-2">
                <button
                  className="flex items-center gap-1 rounded-lg border border-[#ddd3ca] bg-[#fffdfa] px-3 py-1.5 font-semibold text-[#5e5650] disabled:opacity-45"
                  disabled={currentPage === 1}
                  onClick={() => setPage((value) => Math.max(1, value - 1))}
                >
                  <ChevronLeft className="h-3.5 w-3.5" />
                  Prev
                </button>
                <button
                  className="flex items-center gap-1 rounded-lg border border-[#ddd3ca] bg-[#fffdfa] px-3 py-1.5 font-semibold text-[#5e5650] disabled:opacity-45"
                  disabled={currentPage === totalPages}
                  onClick={() => setPage((value) => Math.min(totalPages, value + 1))}
                >
                  Next
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          }
          tableClassName="min-w-[980px]"
        >
                {paginatedRows.map((row) => (
                  <tr key={row.name} className="border-t border-[#ece3db] text-[14px] text-[#2b2828]">
                    <td className="px-6 py-5">
                      <div>
                        <p className="text-[15px] font-semibold text-[#151515]">{row.name}</p>
                        <p className="mt-1.5 text-sm text-[#6f6760]">{row.secondary}</p>
                        {row.tertiary ? <p className="mt-1 text-[12px] text-[#9a9188]">{row.tertiary}</p> : null}
                      </div>
                    </td>
                    {row.cells.map((cell) => (
                      <td key={cell} className="px-4 py-5 text-[#6f6760]">
                        {cell}
                      </td>
                    ))}
                    <td className="px-4 py-5">
                      <StatusBadge tone={row.status} />
                    </td>
                  </tr>
                ))}

                {paginatedRows.length === 0 ? (
                  <tr>
                    <td className="px-6 py-10 text-center text-sm text-[#7a726b]" colSpan={columns.length + 2}>
                      No rows match the current filter and search.
                    </td>
                  </tr>
                ) : null}
        </DataTable>
      </section>
    </div>
  );
}
