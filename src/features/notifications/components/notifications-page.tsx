import { EntityOverviewPage } from "@/components/shared/entity-overview-page";

export function NotificationsPage() {
  return (
    <EntityOverviewPage
      title="Notifications"
      subtitle="Delivery health across in-app alerts, email pushes, and workflow notices"
      searchPlaceholder="Search notifications..."
      metrics={[
        { label: "Sent Today", value: "18.4k", change: "+6.8% volume" },
        { label: "Open Rate", value: "48%", change: "+2.1 pts" },
        { label: "Failures", value: "0.7%", change: "-0.2 pts" },
        { label: "Live Campaigns", value: "9", change: "+1 launched" },
      ]}
      sectionTitle="Messaging Reliability"
      sectionDescription="Coordinate product alerts, customer communication, and automation triggers without leaving the main control surface."
      listTitle="Recent Notification Events"
      listRows={[
        { title: "Payment Recovery Flow", subtitle: "Reminder batch delivered to 1,280 subscribers", meta: "09:24 AM", status: "Completed" },
        { title: "Weekly Digest", subtitle: "Segment review paused pending audience sync", meta: "Hold", status: "Pending" },
        { title: "Security Alert", subtitle: "2FA adoption notification live to all admins", meta: "Broadcast", status: "Active" },
      ]}
      asideTitle="Channel Mix"
      asideItems={[
        { title: "In-App", description: "Best performing channel for operational nudges." },
        { title: "Email", description: "Digest engagement is highest on Tuesday mornings." },
        { title: "Automation", description: "No delayed jobs detected in the last 24 hours." },
      ]}
    />
  );
}
