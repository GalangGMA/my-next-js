import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { PanelCard } from "@/components/shared/panel-card";

type DataTableColumn = {
  key: string;
  label: ReactNode;
  className?: string;
};

export function DataTable({
  columns,
  header,
  children,
  className,
  tableClassName,
  footer,
}: Readonly<{
  columns: DataTableColumn[];
  header?: ReactNode;
  children: ReactNode;
  className?: string;
  tableClassName?: string;
  footer?: ReactNode;
}>) {
  return (
    <PanelCard className={cn("overflow-hidden rounded-[26px]", className)}>
      {header}
      <div className="overflow-x-auto">
        <table className={cn("min-w-full text-left", tableClassName)}>
          <thead>
            <tr className="text-[11px] uppercase tracking-[0.22em] text-[#9c948c]">
              {columns.map((column) => (
                <th key={column.key} className={cn("px-4 py-4 font-semibold", column.className)}>
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
      </div>
      {footer ? <div className="border-t border-[#ece3db] px-5 py-4 text-xs text-[#766e67]">{footer}</div> : null}
    </PanelCard>
  );
}
