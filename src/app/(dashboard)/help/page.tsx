import { PlaceholderPage } from "@/components/shared/placeholder-page";

export default function HelpPage() {
  return (
    <PlaceholderPage
      eyebrow="Support"
      title="Help Center"
      description="Knowledge base, support shortcuts, and onboarding links prepared inside the same premium layout language."
      metrics={[
        { label: "Open guides", value: "26" },
        { label: "Avg. reply", value: "12m" },
        { label: "Satisfaction", value: "98%" },
      ]}
    />
  );
}
