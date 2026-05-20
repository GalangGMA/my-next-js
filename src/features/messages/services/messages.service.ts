import { messagesRepository } from "@/features/messages/repositories/messages.repository";

export const messagesService = {
  async getMessagesPageData() {
    return messagesRepository.getMessagesPageData();
  },
};
