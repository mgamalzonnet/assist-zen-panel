import { useRef, useEffect } from "react";
import { X, UserPlus, ChevronDown, Phone, Smile, Paperclip, Send, Mic } from "lucide-react";
import type { Conversation, Message } from "@/types";
import MessageBubble from "./MessageBubble";

interface ChatAreaProps {
  selected: Conversation | null;
  messages: Message[];
  input: string;
  onInputChange: (value: string) => void;
  onSend: () => void;
}

const ChatArea = ({ selected, messages, input, onInputChange, onSend }: ChatAreaProps) => {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (!selected) {
    return (
      <div
        className="flex-1 flex flex-col items-center justify-center gap-4 bg-secondary/50"
        style={{ backgroundImage: "radial-gradient(circle, #d4d4d430 1px, transparent 1px)", backgroundSize: "20px 20px" }}
      >
        <div className="w-24 h-24 rounded-3xl border-2 border-dashed border-border/60 flex items-center justify-center bg-card/60">
          <div className="w-10 h-10 rounded-xl border-2 border-dashed border-muted-foreground/30" />
        </div>
        <div className="text-center">
          <p className="text-base font-semibold text-foreground">اختر محادثة للبدء</p>
          <p className="text-sm text-muted-foreground mt-1">ستظهر الرسائل هنا</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Chat header */}
      <div className="bg-card border-b border-border px-5 py-3 flex items-center justify-between flex-shrink-0 shadow-sm">
        {/* Contact info */}
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full ${selected.avatarColor} flex items-center justify-center text-white font-bold text-sm`}>
            {selected.avatar}
          </div>
          <div className="text-right">
            <div className="font-semibold text-foreground text-sm">{selected.name}</div>
            <div className="text-xs text-muted-foreground flex items-center gap-1 justify-end">
              <Phone className="w-3 h-3" />
              {selected.phone}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 px-3 py-1.5 bg-primary/5 text-primary rounded-lg text-xs font-medium hover:bg-primary/10 transition-colors border border-primary/20">
            <UserPlus className="w-3.5 h-3.5" />
            تعيين لموظف
            <ChevronDown className="w-3 h-3" />
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 bg-red-50 text-red-600 rounded-lg text-xs font-medium hover:bg-red-100 transition-colors border border-red-100">
            <X className="w-3.5 h-3.5" />
            إغلاق المحادثة
          </button>
        </div>
      </div>

      {/* Messages */}
      <div
        className="flex-1 overflow-y-auto px-6 py-5 bg-secondary/40 flex flex-col gap-2"
        style={{ backgroundImage: "radial-gradient(circle, #d4d4d430 1px, transparent 1px)", backgroundSize: "20px 20px" }}
      >
        <div className="flex items-center justify-center my-2">
          <span className="bg-card/80 text-muted-foreground text-[11px] px-3 py-1 rounded-full shadow-sm">اليوم</span>
        </div>
        {messages.map((msg) => (
          <MessageBubble key={msg.id} message={msg} />
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input bar */}
      <div className="bg-card border-t border-border px-4 py-3 flex items-center gap-3 flex-shrink-0">
        <button
          className="w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors duration-300 ease-out flex-shrink-0 shadow-sm"
          onClick={onSend}
        >
          <Send className="w-4 h-4 text-white" />
        </button>

        <div className="flex-1 bg-secondary/60 border border-border rounded-xl px-4 py-2.5 flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => onInputChange(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && onSend()}
            placeholder="اكتب رسالة..."
            className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none text-right"
          />
          <Mic className="w-4 h-4 text-muted-foreground cursor-pointer hover:text-foreground transition-colors duration-300 ease-out" />
        </div>

        <div className="flex items-center gap-1.5">
          <button className="w-9 h-9 rounded-full hover:bg-secondary flex items-center justify-center transition-colors duration-300 ease-out">
            <Smile className="w-5 h-5 text-muted-foreground" />
          </button>
          <button className="w-9 h-9 rounded-full hover:bg-secondary flex items-center justify-center transition-colors duration-300 ease-out">
            <Paperclip className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatArea;
