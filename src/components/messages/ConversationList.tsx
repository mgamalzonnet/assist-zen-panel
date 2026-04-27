import { Search, Plus, SlidersHorizontal } from "lucide-react";
import type { Conversation } from "@/types";
import ConversationItem from "./ConversationItem";

interface ConversationListProps {
  conversations: Conversation[];
  selectedId: number | null;
  onSelect: (id: number) => void;
  activeTab: string;
  onTabChange: (id: string) => void;
  tabs: readonly { id: string; label: string; count: number | null }[];
}

const ConversationList = ({
  conversations,
  selectedId,
  onSelect,
  activeTab,
  onTabChange,
  tabs,
}: ConversationListProps) => (
  <aside className="flex flex-col h-full bg-card  border-l border-border shadow-sm animate-fade-in">
    {/* Header */}
    <div className="px-4 pt-4 pb-3 border-b border-border">
      <div className="flex items-center justify-between mb-3">
        <h2 className="flex-1 text-base font-bold text-foreground text-center lg:text-right">المحادثات</h2>
        <div className="flex items-center gap-2">
          <button className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors duration-300 ease-out">
            <SlidersHorizontal className="w-4 h-4 text-muted-foreground" />
          </button>
          <button className="w-8 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors duration-300 ease-out">
            <Plus className="w-4 h-4 text-primary-foreground" />
          </button>
        </div>
      </div>
      <div className="flex items-center gap-2 bg-secondary/60 border border-border rounded-xl px-3 py-2">
        <Search className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />
        <input
          type="text"
          placeholder="بحث بالاسم أو الرقم..."
          className="flex-1 bg-transparent text-xs text-foreground placeholder:text-muted-foreground outline-none text-right"
        />
      </div>
    </div>

    {/* Tabs */}
    <div className="flex items-center justify-center gap-1.5 px-3 py-2.5 flex-wrap">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`relative flex items-center justify-center px-3 py-1.5 rounded-full  text-xs font-medium transition-all duration-300 ease-out
              ${isActive ? "bg-primary text-primary-foreground shadow-sm" : " border border-secondary text-muted-foreground hover:text-foreground"}`}
          >
            {tab.label}
            {tab.count !== null && (
              <span className="absolute -top-1.5 -left-1.5 min-w-[18px] h-[18px] px-1 rounded-full bg-muted-foreground/70 text-white text-[9px] font-bold flex items-center justify-center leading-none">
                {tab.count >= 1000 ? `${(tab.count / 1000).toFixed(1).replace(".0", "")}k` : tab.count}
              </span>
            )}
          </button>
        );
      })}
    </div>

    {/* List */}
    <div className="flex-1 overflow-y-auto">
      {conversations.map((conv) => (
        <ConversationItem
          key={conv.id}
          conversation={conv}
          isSelected={selectedId === conv.id}
          onClick={() => onSelect(conv.id)}
        />
      ))}
    </div>
  </aside>
);

export default ConversationList;
