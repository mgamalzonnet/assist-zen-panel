import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import type { Message } from "@/types";
import { conversations, conversationTabs } from "@/data/conversations";
import ConversationList from "@/components/messages/ConversationList";
import ChatArea from "@/components/messages/ChatArea";

const Messages = () => {
  const { setShowHamburger } = useOutletContext<{ setShowHamburger: (v: boolean) => void }>();

  const [activeTab, setActiveTab] = useState("unassigned");
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [input, setInput] = useState("");
  const [showList, setShowList] = useState(true);

  // Hide the layout hamburger when the conversation list is visible on mobile
  // (it would float over the list panel and be confusing)
  useEffect(() => {
    setShowHamburger(showList);
    return () => setShowHamburger(true);
  }, [showList, setShowHamburger]);
  const [msgs, setMsgs] = useState<Record<number, Message[]>>(() =>
    Object.fromEntries(conversations.map((c) => [c.id, c.messages]))
  );

  const selected = conversations.find((c) => c.id === selectedId) ?? null;
  const messages = selectedId ? (msgs[selectedId] ?? []) : [];

  const handleSelect = (id: number) => {
    setSelectedId(id);
    setShowList(false);
  };

  const sendMessage = () => {
    if (!input.trim() || !selectedId) return;
    const newMsg: Message = {
      id: Date.now(),
      text: input.trim(),
      time: new Date().toLocaleTimeString("ar", { hour: "2-digit", minute: "2-digit" }),
      from: "agent",
      status: "sent",
    };
    setMsgs((prev) => ({ ...prev, [selectedId]: [...(prev[selectedId] ?? []), newMsg] }));
    setInput("");
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Conversation list panel
          Mobile: full-screen overlay, toggled by showList state
          Desktop: fixed panel at right-[240px] (after sidebar), always visible */}
      <div
        className={`fixed top-0 h-screen z-30
          right-0 w-full
           lg:w-[310px]
          transition-transform duration-300
          ${showList ? "translate-x-0" : "translate-x-full lg:translate-x-0"}`}
      >
        <ConversationList
          conversations={conversations}
          selectedId={selectedId}
          onSelect={handleSelect}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          tabs={conversationTabs}
        />
      </div>

      {/* Chat area
          Mobile: full screen, hidden when list is showing
          Desktop: offset by ConversationList width */}
      <div className={`flex flex-col flex-1 min-h-screen mr-0 lg:mr-[310px]  ${showList ? "hidden lg:flex" : "flex"}`}>
        <ChatArea
          selected={selected}
          messages={messages}
          input={input}
          onInputChange={setInput}
          onSend={sendMessage}
          onBackToList={() => setShowList(true)}
        />
      </div>
    </div>
  );
};

export default Messages;
