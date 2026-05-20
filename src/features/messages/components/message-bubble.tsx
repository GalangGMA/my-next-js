import { FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import type { MessageBubble as MessageBubbleType } from "@/types/admin";

export function MessageBubble({ message }: Readonly<{ message: MessageBubbleType }>) {
  return (
    <div className={cn("flex", message.author === "me" ? "justify-end" : "justify-start")}>
      {message.attachment ? (
        <div className="w-full max-w-[280px] rounded-[18px] border border-[#ddd3ca] bg-white px-4 py-3.5 shadow-[0_16px_30px_rgba(52,43,36,0.05)]">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#f2f0ff] text-[#4a56b4]">
              <FileText className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[15px] font-semibold text-[#1f1d1d]">{message.attachment.name}</p>
              <p className="mt-1 text-xs text-[#9a9189]">{message.attachment.size}</p>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={cn(
            "max-w-[640px] rounded-[18px] px-4.5 py-4 text-[15px] leading-7 shadow-[0_16px_30px_rgba(52,43,36,0.04)]",
            message.author === "me" ? "bg-[#4a56b4] text-white" : "bg-[#f0ebe7] text-[#272423]"
          )}
        >
          {message.text}
        </div>
      )}
    </div>
  );
}
