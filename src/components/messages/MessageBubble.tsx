import { Image, Video } from "lucide-react";
import type { Message } from "@/types";
import MessageStatus from "./MessageStatus";

interface MessageBubbleProps {
  message: Message;
  showAvatar?: boolean;
  customerAvatar?: string;
  customerAvatarColor?: string;
}

const MessageBubble = ({
  message,
  showAvatar = true,
  customerAvatar = "?",
  customerAvatarColor = "bg-gray-400",
}: MessageBubbleProps) => {
  const isAgent = message.from === "agent";

  const avatar = showAvatar ? (
    <div
      className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0 shadow-sm
        ${isAgent ? "bg-primary" : customerAvatarColor}`}
    >
      {isAgent ? "A" : customerAvatar}
    </div>
  ) : (
    <div className="w-10 flex-shrink-0" />
  );

  return (
    <div className={`flex items-end gap-2 ${isAgent ? "justify-start" : "justify-end"}`}>
      {isAgent && avatar}

      <div
        className={`max-w-[68%] px-3.5 py-2 rounded-2xl 
          animate-fade-in transition-shadow duration-300 ease-out hover:shadow-md
          ${isAgent
            ? "bg-white/90  rounded-br-[3px] text-foreground"
            : "bg-primary text-white rounded-bl-[3px]"
          }`}
      >
        {message.type === "image" ? (
          <div className="flex items-center gap-2 text-sm opacity-80">
            <Image className="w-4 h-4" />
            <span>picture</span>
          </div>
        ) : message.type === "video" ? (
          <div className="flex items-center gap-2 text-sm opacity-80">
            <Video className="w-4 h-4" />
            <span>video</span>
          </div>
        ) : (
          <p className="text-sm leading-relaxed">{message.text}</p>
        )}
        <div className={`flex items-center gap-1 mt-1 ${isAgent ? "justify-end" : "justify-start"}`}>
          <span className={`text-[10px] ${isAgent ? "text-muted-foreground" : "text-white/70"}`}>
            {message.time}
          </span>
          {isAgent && <MessageStatus status={message.status} />}
        </div>
      </div>

      {!isAgent && avatar}
    </div>
  );
};

export default MessageBubble;