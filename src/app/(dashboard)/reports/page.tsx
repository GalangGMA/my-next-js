import { PlaceholderPage } from "@/components/shared/placeholder-page";

export default function ReportsPage() {
  return (
    <PlaceholderPage
      eyebrow="Performance"
      title="Reports"
      description="Executive reporting workbench with scheduled exports, cohort summaries, and drill-down cards prepared for backend integration."
      metrics={[
        { label: "Scheduled", value: "14" },
        { label: "Shared views", value: "32" },
        { label: "Avg. load", value: "1.4s" },
      ]}
    />
  );
}
