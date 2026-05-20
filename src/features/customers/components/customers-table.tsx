"use client";

import { useMemo, useState } from "react";
import { ChevronDown, Search, SlidersHorizontal, X } from "lucide-react";
import { DataTable } from "@/components/shared/data-table";
import { DataTableSummary } from "@/components/shared/data-table-summary";
import { DataTableToolbar, DataTableToolbarChips, DataTableToolbarSearch } from "@/components/shared/data-table-toolbar";
import { StatusBadge } from "@/components/shared/status-badge";
import { cn } from "@/lib/utils";
import type { Customer } from "@/types/admin";

const filters = ["All Customers", "Active", "Inactive", "Enterprise"] as const;
type SortOption = "Newest First" | "Oldest First";

function parseDate(value: string) {
  return new Date(value).getTime();
}

export function CustomersTable({ customers }: Readonly<{ customers: Customer[] }>) {
  const [selectedIds, setSelectedIds] = useState<string[]>(
    customers.filter((customer) => customer.selected).map((customer) => customer.id)
  );
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All Customers");
  const [sortBy, setSortBy] = useState<SortOption>("Newest First");
  const [query, setQuery] = useState("");

  const selectedCount = useMemo(() => selectedIds.length, [selectedIds]);

  const visibleCustomers = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return [...customers]
      .filter((customer) => {
        if (activeFilter === "Active") {
          return customer.status === "Active";
        }

        if (activeFilter === "Inactive") {
          return customer.status === "Inactive";
        }

        if (activeFilter === "Enterprise") {
          return customer.plan === "Enterprise";
        }

        return true;
      })
      .filter((customer) => {
        if (!normalizedQuery) {
          return true;
        }

        return [customer.name, customer.email, customer.country, customer.code]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);
      })
      .sort((left, right) => {
        const delta = parseDate(right.joinedDate) - parseDate(left.joinedDate);
        return sortBy === "Newest First" ? delta : -delta;
      });
  }, [activeFilter, customers, query, sortBy]);

  const allSelected = visibleCustomers.length > 0 && visibleCustomers.every((customer) => selectedIds.includes(customer.id));

  function toggleCustomer(id: string) {
    setSelectedIds((current) =>
      current.includes(id) ? current.filter((value) => value !== id) : [...current, id]
    );
  }

  function toggleAll() {
    setSelectedIds((current) => {
      if (allSelected) {
        return current.filter((id) => !visibleCustomers.some((customer) => customer.id === id));
      }

      return Array.from(new Set([...current, ...visibleCustomers.map((customer) => customer.id)]));
    });
  }

  return (
    <div className="space-y-4">
      {selectedCount > 0 ? (
        <div className="flex flex-col gap-3 rounded-[20px] bg-[#4a56b4] px-5 py-4 text-white shadow-[0_18px_40px_rgba(74,86,180,0.28)] lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3 text-[15px] font-semibold sm:text-[17px]">
            <button className="rounded-full bg-white/12 p-2" onClick={() => setSelectedIds([])}>
              <X className="h-4 w-4" />
            </button>
            {selectedCount} customers selected
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              ["Send Email", "bg-white/12"],
              ["Export", "bg-white/12"],
              ["Delete Selected", "bg-[#ef4e5b]"],
            ].map(([label, className]) => (
              <button key={label} className={cn("rounded-xl px-4 py-2.5 text-sm font-semibold", className)}>
                {label}
              </button>
            ))}
          </div>
        </div>
      ) : null}

      <DataTableToolbar>
        <DataTableToolbarChips activeItem={activeFilter} items={filters} onChange={(filter) => setActiveFilter(filter as (typeof filters)[number])} />

        <DataTableToolbarSearch
          icon={<Search className="h-3.5 w-3.5 text-[#8d847c]" />}
          onChange={setQuery}
          placeholder="Search name, email, code..."
          value={query}
        />

        <button
          className="flex items-center gap-2 rounded-xl border border-[#ddd3ca] bg-[#fffdfa] px-3.5 py-2.5 text-xs font-semibold text-[#665e58]"
          onClick={() => setSortBy((current) => (current === "Newest First" ? "Oldest First" : "Newest First"))}
        >
          <SlidersHorizontal className="h-3.5 w-3.5" />
          {sortBy}
        </button>

        <button className="flex items-center gap-2 rounded-xl border border-[#ddd3ca] bg-[#fffdfa] px-3.5 py-2.5 text-xs font-semibold text-[#665e58]">
          Joined date
          <ChevronDown className="h-3.5 w-3.5" />
        </button>
      </DataTableToolbar>

      <DataTableSummary left={`Showing ${visibleCustomers.length} of ${customers.length} customers`} right={`Filter: ${activeFilter} / Sort: ${sortBy}`} />

      <DataTable
        columns={[
          {
            key: "select",
            label: <input checked={allSelected} className="h-5 w-5 rounded-md border-[#d5cbc2]" onChange={toggleAll} type="checkbox" />,
            className: "px-6",
          },
          { key: "customer", label: "Customer" },
          { key: "email", label: "Email" },
          { key: "phone", label: "Phone" },
          { key: "country", label: "Country" },
          { key: "status", label: "Status" },
          { key: "plan", label: "Plan" },
          { key: "joinedDate", label: <span className="text-[#4a56b4]">Joined Date</span> },
          { key: "actions", label: "Actions" },
        ]}
        tableClassName="min-w-[1180px]"
      >
        {visibleCustomers.map((customer) => {
          const checked = selectedIds.includes(customer.id);

          return (
            <tr key={customer.id} className="border-t border-[#ece3db] align-top text-[14px] text-[#2b2828]">
              <td className="px-6 py-5">
                <input
                  checked={checked}
                  className="h-5 w-5 rounded-md border-[#d5cbc2] accent-[#3b82f6]"
                  onChange={() => toggleCustomer(customer.id)}
                  type="checkbox"
                />
              </td>
              <td className="px-4 py-5">
                <div className="flex items-center gap-4">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-[#dbe6fb] text-xs font-semibold text-[#4a56b4]">
                    {customer.initials}
                  </div>
                  <div>
                    <p className="text-[15px] font-semibold leading-6 text-[#151515]">{customer.name}</p>
                    <p className="mt-1.5 text-xs text-[#989088]">{customer.code}</p>
                  </div>
                </div>
              </td>
              <td className="px-4 py-5 text-[#706963]">{customer.email}</td>
              <td className="px-4 py-5 text-[#706963]">{customer.phone}</td>
              <td className="px-4 py-5 text-[#706963]">
                <div className="flex items-start gap-3">
                  <span className="rounded-md bg-[#f5efe9] px-2 py-1 text-[10px] font-semibold text-[#655d57]">{customer.flag}</span>
                  <span className="max-w-[11ch]">{customer.country}</span>
                </div>
              </td>
              <td className="px-4 py-5">
                <StatusBadge tone={customer.status} />
              </td>
              <td className="px-4 py-5 font-medium">
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#5d68ff]" />
                  {customer.plan}
                </div>
              </td>
              <td className="px-4 py-5 text-[#706963]">{customer.joinedDate}</td>
              <td className="px-4 py-5">
                <button className="rounded-xl border border-[#ddd3ca] bg-[#fbf8f4] px-3.5 py-2 text-xs font-semibold text-[#5e5650]">
                  Open
                </button>
              </td>
            </tr>
          );
        })}

        {visibleCustomers.length === 0 ? (
          <tr>
            <td className="px-8 py-12 text-center text-lg text-[#7a726b]" colSpan={9}>
              No customers match the current search and filters.
            </td>
          </tr>
        ) : null}
      </DataTable>
    </div>
  );
}
