import type { ReactNode } from "react";

export function DataTableToolbar({ children }: Readonly<{ children: ReactNode }>) {
  return <div className="flex flex-wrap items-center gap-2.5">{children}</div>;
}

export function DataTableToolbarSearch({
  value,
  onChange,
  placeholder,
  icon,
}: Readonly<{
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  icon: ReactNode;
}>) {
  return (
    <label className="ml-auto flex min-w-[240px] items-center gap-2 rounded-xl border border-[#ddd3ca] bg-[#fffdfa] px-3.5 py-2 text-xs text-[#665e58] shadow-[0_10px_24px_rgba(52,43,36,0.03)]">
      {icon}
      <input
        className="w-full border-0 bg-transparent outline-none placeholder:text-[#9c948c]"
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        value={value}
      />
    </label>
  );
}

export function DataTableToolbarChips({
  items,
  activeItem,
  onChange,
}: Readonly<{
  items: readonly string[];
  activeItem: string;
  onChange: (item: string) => void;
}>) {
  return (
    <>
      {items.map((item) => (
        <button
          key={item}
          className={
            activeItem === item
              ? "rounded-xl border border-[#4a56b4] bg-[#ececf6] px-3.5 py-2 text-xs font-semibold text-[#4a56b4]"
              : "rounded-xl border border-[#ddd3ca] bg-[#fffdfa] px-3.5 py-2 text-xs font-semibold text-[#665e58]"
          }
          onClick={() => onChange(item)}
        >
          {item}
        </button>
      ))}
    </>
  );
}
