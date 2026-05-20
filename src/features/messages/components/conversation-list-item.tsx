import { cn } from "@/lib/utils";
import type { Conversation } from "@/types/admin";

export function ConversationListItem({
  conversation,
  active,
  onSelect,
}: Readonly<{
  conversation: Conversation;
  active: boolean;
  onSelect: () => void;
}>) {
  return (
    <button
      className={cn(
        "flex w-full items-start gap-3 border-t border-[#e9e0d8] px-5 py-4 text-left sm:px-6",
        active && "border-l-4 border-l-[#4a56b4] bg-[#ececf6]"
      )}
      onClick={onSelect}
    >
      <div className={cn("grid h-10 w-10 shrink-0 place-items-center rounded-full text-sm font-semibold", conversation.accent)}>
        {conversation.initials}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <p className="truncate text-[15px] font-semibold text-[#1f1d1d]">{conversation.name}</p>
            <p className="mt-1 block w-full truncate text-[13px] text-[#7b736c]">{conversation.preview}</p>
          </div>
          <div className="shrink-0 flex flex-col items-end gap-1.5 text-[11px] text-[#8b837b]">
            <span>{conversation.time}</span>
            {conversation.unread > 0 ? (
              <span className="grid h-6 min-w-6 place-items-center rounded-full bg-[#4a56b4] px-1.5 text-[10px] font-semibold text-white">
                {conversation.unread}
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </button>
  );
}
