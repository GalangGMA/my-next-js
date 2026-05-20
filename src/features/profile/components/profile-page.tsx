import { EntityOverviewPage } from "@/components/shared/entity-overview-page";

export function ProfilePage() {
  return (
    <EntityOverviewPage
      title="Profile"
      subtitle="Personal workspace details, security posture, and team visibility"
      searchPlaceholder="Search profile settings..."
      metrics={[
        { label: "Team Access", value: "6", change: "Across 3 workspaces" },
        { label: "Security Score", value: "94", change: "+4 this quarter" },
        { label: "Pending Reviews", value: "3", change: "Awaiting response" },
        { label: "Notifications", value: "14", change: "+2 unread" },
      ]}
      sectionTitle="Account Overview"
      sectionDescription="Keep personal account preferences, access safety, and collaboration visibility aligned with the rest of the enterprise dashboard."
      listTitle="Recent Profile Events"
      listRows={[
        { title: "Jane Doe", subtitle: "Security key verified on desktop device", meta: "Today", status: "Completed" },
        { title: "Notification Preferences", subtitle: "Weekly summary still routed to email and in-app", meta: "Synced", status: "Active" },
        { title: "Recovery Method", subtitle: "Backup phone review recommended", meta: "Action needed", status: "Pending" },
      ]}
      asideTitle="Identity Signals"
      asideItems={[
        { title: "Primary Role", description: "Admin role with billing and support visibility." },
        { title: "Verification", description: "2FA and backup codes are both active." },
        { title: "Last Login", description: "Wednesday, 18 June 2025 from Jakarta office network." },
      ]}
    />
  );
}
