import { PlaceholderPage } from "@/components/shared/placeholder-page";

export default function TransactionsPage() {
  return (
    <PlaceholderPage
      eyebrow="Finance"
      title="Transactions"
      description="Transaction review queue for settlements, refunds, and approvals with room for filter-heavy financial operations."
      metrics={[
        { label: "Pending", value: "27" },
        { label: "Disputed", value: "3" },
        { label: "Approved", value: "184" },
      ]}
    />
  );
}
