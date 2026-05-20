import { EntityOverviewPage } from "@/components/shared/entity-overview-page";

export function TicketsPage() {
  return (
    <EntityOverviewPage
      title="Tickets"
      subtitle="Customer support queue with urgency, ownership, and response quality"
      searchPlaceholder="Search tickets..."
      metrics={[
        { label: "Open", value: "63", change: "-7 today" },
        { label: "Urgent", value: "8", change: "+2 escalated", tone: "down" },
        { label: "Avg. Reply", value: "11m", change: "-3m improved" },
        { label: "Satisfaction", value: "97%", change: "+1.8 pts" },
      ]}
      sectionTitle="Support Command"
      sectionDescription="Watch queue health in real time and keep high-value customers moving through fast, accountable support paths."
      listTitle="Escalation Queue"
      listRows={[
        { title: "TK-910", subtitle: "Refund request linked to duplicate shipment", meta: "Owner: Maya", status: "Pending" },
        { title: "TK-904", subtitle: "Resolved login access issue for finance workspace", meta: "Owner: Jonas", status: "Completed" },
        { title: "TK-899", subtitle: "Enterprise SLA follow-up in progress", meta: "Owner: Rita", status: "Active" },
      ]}
      asideTitle="Support Notes"
      asideItems={[
        { title: "Weekend Load", description: "Ticket volume is trending 9% below projection." },
        { title: "Macros", description: "Top 5 saved responses cover 41% of new issues." },
        { title: "Escalations", description: "Engineering handoff latency is under target." },
      ]}
    />
  );
}
