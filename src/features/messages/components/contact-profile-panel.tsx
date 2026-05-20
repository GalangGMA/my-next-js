import { FileText, Mail, Phone, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Conversation } from "@/types/admin";

export function ContactProfilePanel({
  conversation,
  open,
  onClose,
}: Readonly<{
  conversation: Conversation;
  open: boolean;
  onClose: () => void;
}>) {
  return (
    <aside
      className={cn(
        "bg-[#fbf8f4] px-5 py-6 sm:px-6 lg:absolute lg:inset-y-0 lg:right-0 lg:w-[380px] lg:flex-col lg:overflow-hidden lg:border-l lg:border-[#ddd3ca] lg:shadow-[-20px_0_40px_rgba(48,39,33,0.06)]",
        open ? "block lg:flex" : "hidden lg:hidden"
      )}
    >
      <div className="mb-4 flex items-center justify-between lg:mb-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#998f87]">Contact Profile</p>
        <button className="grid h-8 w-8 place-items-center rounded-full border border-[#ddd3ca] bg-[#fffdfa] text-[#6d655f]" onClick={onClose}>
          <X className="h-3.5 w-3.5" />
        </button>
      </div>

      <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
        <div className="flex flex-col items-center border-b border-[#e8dfd8] px-1 pb-6 text-center">
          <div className={cn("grid h-22 w-22 place-items-center rounded-full text-3xl font-semibold", conversation.accent)}>
            {conversation.initials}
          </div>
          <h2 className="font-display mt-4 text-[30px] leading-none text-[#1f1d1d]">{conversation.name}</h2>
          <p className="mt-2 text-base text-[#7e766f]">{conversation.role}</p>
          <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#4a56b4]">{conversation.company}</p>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto pr-1 pt-6 text-left">
          <div className="space-y-6 pb-4">
            <section>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#998f87]">Contact Details</p>
              <div className="mt-4 space-y-3">
                {[
                  { label: "Email", value: conversation.email, Icon: Mail },
                  { label: "Phone", value: conversation.phone, Icon: Phone },
                ].map(({ label, value, Icon }) => (
                  <div key={label} className="flex items-center gap-3 rounded-[18px] border border-[#ddd3ca] bg-[#fffdfa] px-4 py-4">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#f6f1ed] text-[#8b837b]">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#998f87]">{label}</p>
                      <p className="mt-1.5 text-[14px] font-semibold text-[#1f1d1d]">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <div className="mb-4 flex items-center justify-between">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#998f87]">Shared Files</p>
                <button className="text-xs font-semibold text-[#4a56b4]">View All</button>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {conversation.sharedFiles.map((file) => (
                  <div key={file.name} className="rounded-[18px] border border-[#ddd3ca] bg-[#fffdfa] p-4">
                    <div className="grid h-10 w-10 place-items-center rounded-xl border border-[#ddd3ca] text-[#4a56b4]">
                      <FileText className="h-4 w-4" />
                    </div>
                    <p className="mt-4 text-[14px] font-semibold text-[#1f1d1d]">{file.name}</p>
                    <p className="mt-1 text-[11px] text-[#9a9189]">{file.size}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#998f87]">Shared Links</p>
              <div className="space-y-3">
                {conversation.sharedLinks.map((link) => (
                  <div key={link.name} className="rounded-[18px] border border-[#ddd3ca] bg-[#fffdfa] px-4 py-4">
                    <p className="text-[14px] font-semibold text-[#1f1d1d]">{link.name}</p>
                    <p className="mt-1 text-[11px] text-[#9a9189]">{link.domain}</p>
                  </div>
                ))}
                </div>
            </section>
          </div>
        </div>

      </div>
    </aside>
  );
}
