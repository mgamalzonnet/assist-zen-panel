import { Image, Video } from "lucide-react";
import type { Message } from "@/types";
import MessageStatus from "./MessageStatus";

interface MessageBubbleProps {
  message: Message;
}

const MessageBubble = ({ message }: MessageBubbleProps) => {
  const isAgent = message.from === "agent";

  return (
    <div className={`flex ${isAgent ? "justify-start" : "justify-end"}`}>
      <div
        className={`max-w-[68%] px-3.5 py-2 rounded-2xl shadow-sm relative
          ${isAgent
            ? "bg-[#d9fdd3] rounded-tl-sm text-foreground"
            : "bg-white rounded-tr-sm text-foreground"
          }`}
      >
        {message.type === "image" ? (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Image className="w-4 h-4" />
            <span>صورة</span>
          </div>
        ) : message.type === "video" ? (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Video className="w-4 h-4" />
            <span>فيديو</span>
          </div>
        ) : (
          <p className="text-sm leading-relaxed">{message.text}</p>
        )}
        <div className={`flex items-center gap-1 mt-1 ${isAgent ? "justify-end" : "justify-start"}`}>
          <span className="text-[10px] text-muted-foreground">{message.time}</span>
          {isAgent && <MessageStatus status={message.status} />}
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;
