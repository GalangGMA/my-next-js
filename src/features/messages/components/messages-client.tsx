"use client";

import { useMemo, useState } from "react";
import { Info, Paperclip, Phone, Search, SendHorizontal, Smile, Video } from "lucide-react";
import { ContactProfilePanel } from "@/features/messages/components/contact-profile-panel";
import { ConversationListItem } from "@/features/messages/components/conversation-list-item";
import { MessageBubble } from "@/features/messages/components/message-bubble";
import { cn } from "@/lib/utils";
import { useUiStore } from "@/stores/ui-store";
import type { Conversation } from "@/types/admin";

const inboxTabs = ["All", "Unread", "Archived"];

export function MessagesClient({ conversations }: Readonly<{ conversations: Conversation[] }>) {
  const [activeId, setActiveId] = useState(conversations[0]?.id ?? "");
  const [activeTab, setActiveTab] = useState<(typeof inboxTabs)[number]>("All");
  const showDetails = useUiStore((state) => state.isMessageContactPanelOpen);
  const setShowDetails = useUiStore((state) => state.setMessageContactPanelOpen);
  const closeDetails = useUiStore((state) => state.closeMessageContactPanel);

  const activeConversation = useMemo(
    () => conversations.find((conversation) => conversation.id === activeId) ?? conversations[0],
    [activeId, conversations]
  );

  const visibleConversations = useMemo(() => {
    if (activeTab === "Unread") {
      return conversations.filter((conversation) => conversation.unread > 0);
    }

    if (activeTab === "Archived") {
      return conversations.slice(-2);
    }

    return conversations;
  }, [activeTab, conversations]);

  return (
    <div className="relative h-full overflow-hidden lg:grid lg:grid-cols-[340px_minmax(0,1fr)]">
      <aside className="flex min-h-0 flex-col border-b border-[#ddd3ca] bg-[#fbf8f4] lg:border-b-0 lg:border-r">
        <div className="flex items-center justify-between px-5 pb-5 pt-6 sm:px-6">
          <div>
            <h1 className="font-display text-[34px] leading-none text-[#1f1d1d]">Messages</h1>
          </div>
          <button className="grid h-11 w-11 place-items-center rounded-xl border border-[#ddd3ca] bg-[#fffdfa] text-[#4a56b4] shadow-[0_12px_30px_rgba(52,43,36,0.04)]">
            +
          </button>
        </div>

        <div className="px-5 pb-5 sm:px-6">
          <label className="flex h-11 items-center gap-3 rounded-xl border border-[#ddd3ca] bg-[#fffdfa] px-3.5 shadow-[0_12px_30px_rgba(52,43,36,0.04)]">
            <Search className="h-4 w-4 text-[#8b837b]" />
            <input
              className="w-full border-0 bg-transparent text-sm text-[#2a2827] outline-none placeholder:text-[#9b938b]"
              placeholder="Search conversations..."
              type="search"
            />
          </label>

          <div className="mt-4 grid grid-cols-3 rounded-xl bg-[#f4eee9] p-1">
            {inboxTabs.map((tab) => (
              <button
                key={tab}
                className={cn(
                  "rounded-lg px-3 py-2.5 text-sm font-semibold",
                  activeTab === tab ? "bg-white text-[#1f1d1d] shadow-sm" : "text-[#7f776f]"
                )}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto">
          {visibleConversations.map((conversation) => {
            const isActive = activeConversation.id === conversation.id;

            return (
              <ConversationListItem
                key={conversation.id}
                active={isActive}
                conversation={conversation}
                onSelect={() => {
                  setActiveId(conversation.id);
                  closeDetails();
                }}
              />
            );
          })}
        </div>
      </aside>

      <section className="flex min-h-0 h-full flex-col overflow-hidden border-b border-[#ddd3ca] lg:border-b-0 lg:border-r">
        <div className="flex items-center justify-between border-b border-[#ddd3ca] bg-[#fbf8f4] px-5 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div className={cn("grid h-10 w-10 place-items-center rounded-full text-sm font-semibold", activeConversation.accent)}>
              {activeConversation.initials}
            </div>
            <div>
              <button className="flex items-center gap-2 text-left" onClick={() => setShowDetails(true)}>
                <p className="text-[16px] font-semibold text-[#1f1d1d] hover:text-[#4a56b4]">{activeConversation.name}</p>
                {activeConversation.online ? <span className="h-2 w-2 rounded-full bg-[#16af75]" /> : null}
              </button>
              <p className="text-sm text-[#8b837b]">
                {activeConversation.role} / {activeConversation.company}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-[#6d655f]">
            {[Phone, Video, Info].map((Icon, index) => (
              <button key={index} className="grid h-9 w-9 place-items-center rounded-full border border-[#ddd3ca] bg-[#fffdfa]">
                <Icon className="h-4 w-4" strokeWidth={1.7} />
              </button>
            ))}
          </div>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto bg-[#fdfaf7] px-5 py-5 sm:px-6">
          <div className="mx-auto mb-6 w-fit rounded-full bg-[#f1ebe5] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9a9189]">
            Today
          </div>
          <div className="space-y-5">
            {activeConversation.messages.map((message) => (
              <MessageBubble key={message.id} message={message} />
            ))}
          </div>
        </div>

        <div className="border-t border-[#ddd3ca] bg-[#fbf8f4] px-5 py-4 sm:px-6">
          <div className="flex items-center gap-2 rounded-[20px] border border-[#ddd3ca] bg-[#fffdfa] px-3.5 py-2.5 shadow-[0_12px_30px_rgba(52,43,36,0.04)]">
            <button className="grid h-9 w-9 place-items-center rounded-full text-[#8b837b]">
              <Paperclip className="h-4 w-4" />
            </button>
            <button className="grid h-9 w-9 place-items-center rounded-full text-[#8b837b]">
              <Smile className="h-4 w-4" />
            </button>
            <input
              className="min-w-0 flex-1 border-0 bg-transparent text-sm text-[#2a2827] outline-none placeholder:text-[#9b938b]"
              placeholder="Type a message..."
              type="text"
            />
            <button className="grid h-11 w-11 place-items-center rounded-xl bg-[#4a56b4] text-white shadow-[0_18px_34px_rgba(74,86,180,0.25)]">
              <SendHorizontal className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      <ContactProfilePanel conversation={activeConversation} onClose={closeDetails} open={showDetails} />
    </div>
  );
}
