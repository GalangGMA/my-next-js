export const ordersPageData = {
  metrics: [
    { label: "Open Orders", value: "284", change: "+18 since yesterday" },
    { label: "Shipped", value: "1,204", change: "+8.7% this week" },
    { label: "At Risk", value: "12", change: "-5 after review" },
    { label: "Avg. SLA", value: "19h", change: "-2h faster" },
  ],
  filters: ["All Orders", "Priority", "Pending", "Delayed"],
  columns: ["Customer", "Channel", "Value"],
  rows: [
    {
      name: "ORD-10922",
      secondary: "Awaiting freight confirmation",
      tertiary: "Created today at 08:21",
      filter: "Pending",
      cells: ["Northstar Home", "Enterprise", "$14,280"],
      status: "Pending",
    },
    {
      name: "ORD-10915",
      secondary: "Priority decor shipment completed",
      tertiary: "Packed in Warehouse A",
      filter: "Priority",
      cells: ["Ceramic Studio", "Direct", "$2,980"],
      status: "Completed",
    },
    {
      name: "ORD-10898",
      secondary: "Address verification auto-resolved",
      tertiary: "Carrier pickup scheduled",
      filter: "Priority",
      cells: ["Bright Loft", "Marketplace", "$860"],
      status: "Active",
    },
    {
      name: "ORD-10872",
      secondary: "Shipment held by customs review",
      tertiary: "International lane review",
      filter: "Delayed",
      cells: ["Urban Atelier", "Cross-border", "$4,420"],
      status: "Suspended",
    },
  ],
} as const;
