export type NavigationIcon =
  | "box"
  | "briefcase"
  | "chart-column"
  | "chart-no-axes-line"
  | "circle-help"
  | "credit-card"
  | "file-text"
  | "shield"
  | "layout-grid"
  | "message-square"
  | "receipt"
  | "settings"
  | "ticket"
  | "users";

export type NavigationItem = {
  href: string;
  label: string;
  icon: NavigationIcon;
  section: "MAIN" | "ANALYTICS" | "SETTINGS";
};

export type DashboardStat = {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  accent?: boolean;
};

export type RevenuePoint = {
  month: string;
  revenue: number;
  target: number;
};

export type TopProduct = {
  name: string;
  category: string;
  value: string;
};

export type RecentTransaction = {
  id: string;
  customer: string;
  date: string;
  amount: string;
  status: "Completed" | "Pending" | "Refunded";
};

export type CustomerStatus = "Active" | "Suspended" | "Inactive";
export type CustomerPlan = "Pro" | "Starter" | "Enterprise" | "Free";

export type Customer = {
  id: string;
  initials: string;
  name: string;
  code: string;
  email: string;
  phone: string;
  country: string;
  flag: string;
  status: CustomerStatus;
  plan: CustomerPlan;
  joinedDate: string;
  selected?: boolean;
};

export type MessageAttachment = {
  name: string;
  size: string;
};

export type MessageBubble = {
  id: string;
  author: "them" | "me";
  text?: string;
  attachment?: MessageAttachment;
};

export type SharedAsset = {
  name: string;
  size: string;
};

export type SharedLink = {
  name: string;
  domain: string;
};

export type Conversation = {
  id: string;
  initials: string;
  accent: string;
  name: string;
  role: string;
  company: string;
  preview: string;
  unread: number;
  time: string;
  online?: boolean;
  messages: MessageBubble[];
  email: string;
  phone: string;
  sharedFiles: SharedAsset[];
  sharedLinks: SharedLink[];
};

export type DashboardPageData = {
  stats: DashboardStat[];
  revenue: RevenuePoint[];
  topProducts: TopProduct[];
  transactions: RecentTransaction[];
};

export type CustomersPageData = {
  customers: Customer[];
};

export type MessagesPageData = {
  conversations: Conversation[];
};
