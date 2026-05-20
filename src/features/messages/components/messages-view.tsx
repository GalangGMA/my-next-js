import { MessagesClient } from "@/features/messages/components/messages-client";
import type { MessagesPageData } from "@/types/admin";

export function MessagesView({ data }: Readonly<{ data: MessagesPageData }>) {
  return (
    <div className="h-full overflow-hidden bg-[#fbf8f4] lg:max-h-screen">
      <MessagesClient conversations={data.conversations} />
    </div>
  );
}
