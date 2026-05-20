import type { NavigationItem } from "@/types/admin";

export const navigationItems: NavigationItem[] = [
  { href: "/", label: "Dashboard", icon: "layout-grid", section: "MAIN" },
  { href: "/reports", label: "Reports", icon: "chart-column", section: "MAIN" },
  { href: "/analytics", label: "Analytics", icon: "chart-no-axes-line", section: "MAIN" },
  { href: "/transactions", label: "Transactions", icon: "credit-card", section: "ANALYTICS" },
  { href: "/customers", label: "Customers", icon: "users", section: "ANALYTICS" },
  { href: "/users", label: "Users", icon: "briefcase", section: "ANALYTICS" },
  { href: "/roles", label: "Roles", icon: "shield", section: "ANALYTICS" },
  { href: "/products", label: "Products", icon: "box", section: "ANALYTICS" },
  { href: "/orders", label: "Orders", icon: "receipt", section: "ANALYTICS" },
  { href: "/invoices", label: "Invoices", icon: "file-text", section: "ANALYTICS" },
  { href: "/tickets", label: "Tickets", icon: "ticket", section: "ANALYTICS" },
  { href: "/notifications", label: "Notifications", icon: "message-square", section: "ANALYTICS" },
  { href: "/messages", label: "Messages", icon: "message-square", section: "ANALYTICS" },
  { href: "/profile", label: "Profile", icon: "users", section: "SETTINGS" },
  { href: "/settings", label: "Settings", icon: "settings", section: "SETTINGS" },
  { href: "/help", label: "Help", icon: "circle-help", section: "SETTINGS" },
];
