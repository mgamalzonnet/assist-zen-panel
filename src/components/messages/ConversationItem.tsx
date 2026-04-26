import { RotateCcw } from "lucide-react";
import type { Conversation } from "@/types";
import WaIcon from "./WaIcon";

interface ConversationItemProps {
  conversation: Conversation;
  isSelected: boolean;
  onClick: () => void;
}

const ConversationItem = ({ conversation: conv, isSelected, onClick }: ConversationItemProps) => (
  <button
    onClick={onClick}
    className={`w-full flex items-start gap-3 px-4 py-3 border-b border-border/40 transition-colors duration-300 ease-out text-right
      ${isSelected ? "bg-primary/[0.08]" : "hover:bg-secondary/70"}`}
  >
    {/* Avatar */}
    <div className="flex-shrink-0 relative mt-0.5">
      <div className={`w-10 h-10 rounded-full ${conv.avatarColor} flex items-center justify-center text-white text-sm font-bold`}>
        {conv.avatar}
      </div>
      <div className="absolute -bottom-0.5 -left-0.5 w-4 h-4 rounded-full bg-green-500 flex items-center justify-center border border-white">
        <WaIcon />
      </div>
    </div>

    {/* Content */}
    <div className="flex-1 min-w-0">
      <div className="flex items-center justify-between mb-0.5">
        <span className="text-sm font-semibold text-foreground truncate">{conv.name}</span>
        <span className="text-[11px] text-muted-foreground flex-shrink-0">{conv.time}</span>
      </div>

      <div className="flex items-center justify-between gap-1">
          <span className="text-xs text-muted-foreground truncate text-right">
          {conv.messageType === "image" ? "📷 صورة" : conv.messageType === "video" ? "🎥 فيديو" : conv.lastMessage}
        </span>
        <div className="flex items-center gap-1 flex-shrink-0">
       
          {conv.replies && (
            <div className="flex items-center gap-0.5 text-muted-foreground">
              <RotateCcw className="w-2.5 h-2.5" />
              <span className="text-[10px]">{conv.replies}</span>
            </div>
          )}
             {(conv.unread ?? 0) > 0 && (
            <span className="w-4 h-4 rounded-full bg-primary text-primary-foreground text-[9px] font-bold flex items-center justify-center">
              {conv.unread}
            </span>
          )}
        </div>
      
      </div>

      <div className="flex items-center gap-1 justify-end mt-1">
        {conv.assignedTo && (
          <span className="text-[9px] px-1.5 py-0.5 bg-primary/10 text-primary rounded-full">
            {conv.assignedTo}
          </span>
        )}
        <span className="text-[9px] px-1.5 py-0.5 bg-secondary/70 border border-border/50 text-muted-foreground rounded-full">
          {conv.channel}
        </span>
      </div>
    </div>
  </button>
);

export default ConversationItem;
