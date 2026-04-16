import { useState } from "react";
import type { Message } from "@/types";
import { conversations, conversationTabs } from "@/data/conversations";
import ConversationList from "@/components/messages/ConversationList";
import ChatArea from "@/components/messages/ChatArea";

const Messages = () => {
  const [activeTab, setActiveTab] = useState("unassigned");
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState<Record<number, Message[]>>(() =>
    Object.fromEntries(conversations.map((c) => [c.id, c.messages]))
  );

  const selected = conversations.find((c) => c.id === selectedId) ?? null;
  const messages = selectedId ? (msgs[selectedId] ?? []) : [];

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
    <>
      {/* Conversation list — fixed panel next to the sidebar */}
      <ConversationList
        conversations={conversations}
        selectedId={selectedId}
        onSelect={setSelectedId}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        tabs={conversationTabs}
      />

      {/* Chat area — offset by ConversationList width (310px) only;
          DashboardLayout's <main> already adds ml-[240px] for the sidebar */}
      <div className="flex flex-col flex-1 h-screen mr-[310px]">
        <ChatArea
          selected={selected}
          messages={messages}
          input={input}
          onInputChange={setInput}
          onSend={sendMessage}
        />
      </div>
    </>
  );
};

export default Messages;
