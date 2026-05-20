import { PlaceholderPage } from "@/components/shared/placeholder-page";

export function SettingsPage() {
  return (
    <PlaceholderPage
      eyebrow="System"
      title="Settings"
      description="Workspace configuration, team permissions, and integration controls in the same visual system as the main dashboard."
      metrics={[
        { label: "Integrations", value: "9" },
        { label: "Webhooks", value: "4" },
        { label: "Admins", value: "6" },
      ]}
    />
  );
}
