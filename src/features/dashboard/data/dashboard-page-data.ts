import type { DashboardPageData } from "@/types/admin";

export const dashboardPageData: DashboardPageData = {
  stats: [
    { title: "Total revenue", value: "$124,580", change: "+12.5%", trend: "up", accent: true },
    { title: "Active users", value: "3,842", change: "+5.2%", trend: "up" },
    { title: "Conversion rate", value: "4.7%", change: "-0.4%", trend: "down" },
    { title: "Pending orders", value: "128", change: "+18", trend: "up" },
  ],
  revenue: [
    { month: "Jan", revenue: 22, target: 18 },
    { month: "Mar", revenue: 32, target: 24 },
    { month: "May", revenue: 28, target: 23 },
    { month: "Jul", revenue: 41, target: 30 },
    { month: "Sep", revenue: 36, target: 29 },
    { month: "Nov", revenue: 54, target: 38 },
  ],
  topProducts: [
    { name: "Ceramic Vase Set", category: "Home decor", value: "$12,400" },
    { name: "Minimalist Desk Lamp", category: "Lighting", value: "$8,200" },
    { name: "Linen Throw Pillow", category: "Textiles", value: "$4,150" },
    { name: "Oak Wall Shelf", category: "Furniture", value: "$3,800" },
    { name: "Brass Candle Holder", category: "Home decor", value: "$2,900" },
  ],
  transactions: [
    { id: "#TR-8901", customer: "Alexander Wright", date: "Jun 18, 2025", amount: "$450.00", status: "Completed" },
    { id: "#TR-8902", customer: "Elena Rossi", date: "Jun 17, 2025", amount: "$1,200.00", status: "Pending" },
    { id: "#TR-8903", customer: "Liam O'Connor", date: "Jun 15, 2025", amount: "$280.00", status: "Completed" },
    { id: "#TR-8904", customer: "Mia Chen", date: "Jun 14, 2025", amount: "$760.00", status: "Refunded" },
  ],
};
