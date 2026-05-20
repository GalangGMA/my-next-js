import { MessagesPage } from "@/features/messages/components/messages-page";
import { messagesService } from "@/features/messages/services/messages.service";

export default async function MessagesRoute() {
  const messagesData = await messagesService.getMessagesPageData();

  return <MessagesPage data={messagesData} />;
}
