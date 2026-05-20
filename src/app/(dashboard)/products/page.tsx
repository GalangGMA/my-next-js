import { PlaceholderPage } from "@/components/shared/placeholder-page";

export default function ProductsPage() {
  return (
    <PlaceholderPage
      eyebrow="Catalog"
      title="Products"
      description="Merchandising center for inventory health, visual asset readiness, and launch status across product families."
      metrics={[
        { label: "Live SKUs", value: "248" },
        { label: "Drafts", value: "19" },
        { label: "Low stock", value: "8" },
      ]}
    />
  );
}
