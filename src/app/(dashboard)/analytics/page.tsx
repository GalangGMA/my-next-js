import { PlaceholderPage } from "@/components/shared/placeholder-page";

export default function AnalyticsPage() {
  return (
    <PlaceholderPage
      eyebrow="Insights"
      title="Analytics"
      description="Trend analysis and campaign measurement surface styled to match the admin system while waiting for deeper chart modules."
      metrics={[
        { label: "MQL growth", value: "+18.2%" },
        { label: "Retention", value: "92%" },
        { label: "Live goals", value: "11" },
      ]}
    />
  );
}
