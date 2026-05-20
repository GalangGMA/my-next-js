export const invoicesPageData = {
  metrics: [
    { label: "Issued", value: "426", change: "+32 this cycle" },
    { label: "Overdue", value: "17", change: "-4 recovered" },
    { label: "Collected", value: "$418k", change: "+11.2% MTD" },
    { label: "Disputed", value: "5", change: "+1 new case" },
  ],
  filters: ["All Invoices", "Outstanding", "Collected", "Disputed"],
  columns: ["Account", "Due Date", "Amount"],
  rows: [
    {
      name: "INV-2041",
      secondary: "Annual enterprise renewal sent",
      tertiary: "Net 30 contract",
      filter: "Outstanding",
      cells: ["Northstar", "29 Jun 2025", "$42,000"],
      status: "Pending",
    },
    {
      name: "INV-2038",
      secondary: "Interior goods order fully paid",
      tertiary: "Auto-reconciled",
      filter: "Collected",
      cells: ["Haven Retail", "17 Jun 2025", "$3,120"],
      status: "Completed",
    },
    {
      name: "INV-2031",
      secondary: "Reminder sequence queued",
      tertiary: "Follow-up in 12 hours",
      filter: "Outstanding",
      cells: ["Studio Forma", "12 Jun 2025", "$8,440"],
      status: "Active",
    },
    {
      name: "INV-2022",
      secondary: "Chargeback documentation under review",
      tertiary: "Finance owner assigned",
      filter: "Disputed",
      cells: ["Acme Projects", "05 Jun 2025", "$6,720"],
      status: "Refunded",
    },
  ],
} as const;
