"use client";

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import type { RevenuePoint } from "@/types/admin";

export function RevenueChart({ data }: Readonly<{ data: RevenuePoint[] }>) {
  return (
    <div className="h-[360px] pt-6 lg:h-[420px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 16, right: 8, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="revenueFill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#4a56b4" stopOpacity={0.25} />
              <stop offset="100%" stopColor="#4a56b4" stopOpacity={0.02} />
            </linearGradient>
            <linearGradient id="targetFill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#d6d0ca" stopOpacity={0.3} />
              <stop offset="100%" stopColor="#d6d0ca" stopOpacity={0.02} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="#ebe2da" vertical={false} />
          <XAxis axisLine={false} dataKey="month" tickLine={false} tick={{ fill: "#938b84", fontSize: 14 }} />
          <YAxis axisLine={false} tickFormatter={(value) => `$${value}k`} tickLine={false} tick={{ fill: "#938b84", fontSize: 14 }} />
          <Tooltip
            contentStyle={{
              background: "#fffdfa",
              border: "1px solid #ddd3ca",
              borderRadius: 18,
              boxShadow: "0 18px 36px rgba(52, 43, 36, 0.08)",
            }}
            formatter={(value) => [`$${Number(value ?? 0)}k`, "Revenue"]}
            labelStyle={{ color: "#1f1c1c", fontWeight: 600 }}
          />
          <Area dataKey="target" fill="url(#targetFill)" stroke="#c7beb6" strokeWidth={2} type="monotone" />
          <Area dataKey="revenue" fill="url(#revenueFill)" stroke="#4a56b4" strokeWidth={3} type="monotone" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
