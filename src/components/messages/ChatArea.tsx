import { useRef, useEffect } from "react";
import { X, Phone, Video, Search, Volume2, Smile, Paperclip, Send, Mic, MoreVertical, LayoutPanelLeft } from "lucide-react";
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
        className="relative flex-1 flex flex-col items-center justify-center gap-4 h-full"
        style={{ backgroundImage: "url('/chat-pattern.png')", backgroundSize: "150%", backgroundRepeat: "no-repeat" }}
      >
        <div className="absolute inset-0 bg-primary/10 pointer-events-none" />
        <div className="relative z-10 w-20 h-20 rounded-3xl border-2 border-dashed border-white/40 flex items-center justify-center bg-white/10 backdrop-blur-sm">
          <Send className="w-8 h-8 text-white/60" />
        </div>
        <div className="relative z-10 text-center">
          <p className="text-base font-semibold text-white drop-shadow">اختر محادثة للبدء</p>
          <p className="text-sm text-white/60 mt-1">ستظهر الرسائل هنا</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">

      {/* ── Header ── */}
      <div className="bg-primary/10 border-b border-primary/15 px-5 py-3 flex items-center justify-between flex-shrink-0">

        {/* Contact info — right side in RTL */}
        <div className="flex items-center gap-3">
          <div className="relative flex-shrink-0">
            <div className={`w-10 h-10 rounded-full ${selected.avatarColor} flex items-center justify-center text-white font-bold text-sm shadow-sm`}>
              {selected.avatar}
            </div>
            <span className="absolute bottom-0 left-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white" />
          </div>
          <div className="text-right">
            <div className="font-bold text-foreground text-sm leading-tight">{selected.name}</div>
            <div className="flex items-center gap-1.5 justify-start mt-0.5">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-xs text-primary font-medium">نشط</span>
            </div>
          </div>
        </div>

        {/* Action icons — left side in RTL */}
        <div className="flex items-center gap-1 text-primary">
          <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-primary/10 transition-colors">
            <MoreVertical className="w-4 h-4" />
          </button>

          <div className="w-px h-5 bg-primary/25 mx-1" />

          <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-primary/10 transition-colors">
            <LayoutPanelLeft className="w-4 h-4" />
          </button>

          <div className="w-px h-5 bg-primary/25 mx-1" />

          <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-primary/10 transition-colors">
            <Phone className="w-4 h-4" />
          </button>

          <div className="w-px h-5 bg-primary/25 mx-1" />

          <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-primary/10 transition-colors">
            <Video className="w-4 h-4" />
          </button>

          <div className="w-px h-5 bg-primary/25 mx-1" />

          <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-primary/10 transition-colors">
            <Search className="w-4 h-4" />
          </button>

          <div className="w-px h-5 bg-primary/25 mx-1" />

          <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-primary/10 transition-colors">
            <Volume2 className="w-4 h-4" />
          </button>

          <div className="w-px h-5 bg-primary/25 mx-1" />

          <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-red-50 hover:text-red-500 transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* ── Messages ── */}
      <div className="relative flex-1 overflow-y-auto">
        <div
          className="absolute inset-0 opacity-80 pointer-events-none"
          style={{ backgroundImage: "url('/chat-pattern.png')", backgroundSize: "auto", backgroundRepeat: "repeat" }}
        />
        <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
        <div className="relative z-10 flex flex-col gap-2 px-6 py-5">
          <div className="flex items-center justify-center my-2">
            <span className="bg-black/20 backdrop-blur-sm text-white text-[11px] px-4 py-1 rounded-full shadow-sm tracking-wide">
              اليوم
            </span>
          </div>
          {messages.map((msg, i) => (
            <MessageBubble
              key={msg.id}
              message={msg}
              showAvatar={i === messages.length - 1 || messages[i + 1]?.from !== msg.from}
              customerAvatar={selected.avatar}
              customerAvatarColor={selected.avatarColor}
            />
          ))}
          <div ref={bottomRef} />
        </div>
      </div>

      {/* ── Input bar ── */}
      <div className="bg-card/95 backdrop-blur-sm border-t border-border px-4 py-3 flex items-center gap-2.5 flex-shrink-0">

        {/* Left icons */}
        <div className="flex items-center gap-1 flex-shrink-0">
          <button className="w-9 h-9 rounded-full hover:bg-secondary flex items-center justify-center transition-colors text-muted-foreground hover:text-foreground">
            <Paperclip className="w-[18px] h-[18px]" />
          </button>
          <button className="w-9 h-9 rounded-full hover:bg-secondary flex items-center justify-center transition-colors text-muted-foreground hover:text-foreground">
            <Smile className="w-[18px] h-[18px]" />
          </button>
        </div>

        {/* Text input */}
        <div className="flex-1 flex items-center gap-2 bg-secondary/60 border border-border rounded-2xl px-4 py-2.5">
          <Mic className="w-4 h-4 text-muted-foreground cursor-pointer hover:text-primary transition-colors flex-shrink-0" />
          <input
            type="text"
            value={input}
            onChange={(e) => onInputChange(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && onSend()}
            placeholder="اكتب رسالة..."
            className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none text-right"
          />
        </div>

        {/* Send button */}
        <button
          onClick={onSend}
          className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 active:scale-95 transition-all duration-150 shadow-md flex-shrink-0"
        >
          <Send className="w-4 h-4 text-white" />
        </button>
      </div>
    </div>
  );
};

export default ChatArea;
