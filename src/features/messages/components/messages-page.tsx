import { MessagesView } from "@/features/messages/components/messages-view";
import type { MessagesPageData } from "@/types/admin";

export function MessagesPage({ data }: Readonly<{ data: MessagesPageData }>) {
  return <MessagesView data={data} />;
}
