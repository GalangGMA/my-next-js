import { EntityOverviewPage } from "@/components/shared/entity-overview-page";

export default function RolesPage() {
  return (
    <EntityOverviewPage
      title="Roles"
      subtitle="Permission design, approvals, and audit-safe access boundaries"
      searchPlaceholder="Search roles..."
      metrics={[
        { label: "Role Sets", value: "24", change: "+2 updated" },
        { label: "Policies", value: "61", change: "+6.4% coverage" },
        { label: "Exceptions", value: "7", change: "-2 this sprint" },
        { label: "Approvals", value: "13", change: "+5 waiting" },
      ]}
      sectionTitle="Permission Architecture"
      sectionDescription="Separate operational roles from elevated permissions and keep governance visible for teams, auditors, and security owners."
      listTitle="Recent Policy Events"
      listRows={[
        { title: "Billing Admin", subtitle: "Refund permissions narrowed to finance leads only", meta: "Policy patch", status: "Completed" },
        { title: "Support Lead", subtitle: "Ticket export permission pending approval", meta: "Awaiting approval", status: "Pending" },
        { title: "Contractor", subtitle: "Workspace access automatically expires after 30 days", meta: "Safeguard active", status: "Active" },
      ]}
      asideTitle="Governance Notes"
      asideItems={[
        { title: "Least Privilege", description: "11 roles are candidates for narrower scopes." },
        { title: "Quarterly Review", description: "Next certification window begins in 6 days." },
        { title: "Audit Trail", description: "All role grants are recorded and export-ready." },
      ]}
    />
  );
}
