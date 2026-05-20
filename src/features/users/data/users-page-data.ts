export const usersPageData = {
  metrics: [
    { label: "Team Members", value: "148", change: "+12 this month" },
    { label: "Pending Invites", value: "19", change: "+4 today" },
    { label: "Active Sessions", value: "312", change: "+9.1% live" },
    { label: "Dormant", value: "11", change: "-3 this week" },
  ],
  filters: ["All Users", "Admins", "Pending", "Dormant"],
  columns: ["Role", "Team", "Last Active"],
  rows: [
    {
      name: "Alya Simmons",
      secondary: "al.simmons@vela.io",
      tertiary: "Joined 5 Jun 2025",
      filter: "Pending",
      cells: ["Finance Admin", "Billing", "2 minutes ago"],
      status: "Pending",
    },
    {
      name: "Nate Ford",
      secondary: "nate.ford@vela.io",
      tertiary: "Joined 12 Apr 2025",
      filter: "Admins",
      cells: ["Security Lead", "Platform", "1 hour ago"],
      status: "Completed",
    },
    {
      name: "Grace Kim",
      secondary: "grace.kim@vela.io",
      tertiary: "Joined 17 Jan 2025",
      filter: "Admins",
      cells: ["Workspace Admin", "Operations", "Today, 09:12"],
      status: "Active",
    },
    {
      name: "Luis Ortega",
      secondary: "luis.ortega@vela.io",
      tertiary: "No recent activity flag",
      filter: "Dormant",
      cells: ["Analyst", "Growth", "7 days ago"],
      status: "Inactive",
    },
  ],
} as const;
