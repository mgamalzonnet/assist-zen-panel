import { useState, useRef, useEffect } from "react";
import {
  Search, Plus, SlidersHorizontal, Image, Video, RotateCcw,
  Paperclip, Smile, Send, CheckCheck, Check, Phone, X,
  UserPlus, ChevronDown, Mic,
} from "lucide-react";
import DashboardSidebar from "@/components/DashboardSidebar";

/* ─── Types ─────────────────────────────────────────── */
interface Message {
  id: number;
  text: string;
  time: string;
  from: "agent" | "customer";
  status?: "sent" | "delivered" | "read";
  type?: "text" | "image" | "video";
}

interface Conversation {
  id: number;
  name: string;
  phone: string;
  avatar: string;
  avatarColor: string;
  lastMessage: string;
  time: string;
  channel: string;
  unread?: number;
  replies?: number;
  messageType?: "image" | "video" | "text";
  assignedTo?: string;
  tag?: string;
  messages: Message[];
}

/* ─── Mock data ─────────────────────────────────────── */
const conversations: Conversation[] = [
  {
    id: 1, name: "Om bader", phone: "+966566778044",
    avatar: "O", avatarColor: "bg-indigo-600",
    lastMessage: "الووو", time: "13:07", channel: "8000", unread: 0, replies: 4,
    messages: [
      { id: 1, text: "السلام عليكم، أريد الاستفسار عن الباقات المتاحة", time: "12:50", from: "customer" },
      { id: 2, text: "وعليكم السلام! أهلاً بك 😊 يسعدنا مساعدتك. ما نوع الباقة التي تبحث عنها؟", time: "12:52", from: "agent", status: "read" },
      { id: 3, text: "أبحث عن باقة تعليمية للأطفال", time: "12:55", from: "customer" },
      { id: 4, text: "لدينا باقة الترم الكاملة بخصم 70% الآن! تشمل جميع المواد للمرحلة الابتدائية 🎓", time: "12:57", from: "agent", status: "read" },
      { id: 5, text: "الووو", time: "13:07", from: "customer" },
    ],
  },
  {
    id: 2, name: "Esraa Alharbi", phone: "+966598930009",
    avatar: "E", avatarColor: "bg-emerald-500",
    lastMessage: "على كذا ماي اخلص من تأسيسها", time: "13:06", channel: "8000", unread: 0, replies: 5,
    messages: [
      { id: 1, text: "مرحبا، كيف أشترك في باقة الرياضيات؟", time: "12:30", from: "customer" },
      { id: 2, text: "أهلاً إسراء! يمكنك الاشتراك عبر الرابط المرسل على رقمك أو من خلال الموقع الرسمي", time: "12:32", from: "agent", status: "read" },
      { id: 3, text: "جربت لكن ما اشتغل الرابط", time: "12:40", from: "customer" },
      { id: 4, text: "معلش نشوف المشكلة، هل تقدرين تحاولين مرة ثانية وترسلين لي لقطة الشاشة؟", time: "12:42", from: "agent", status: "read" },
      { id: 5, text: "على كذا ماي اخلص من تأسيسها", time: "13:06", from: "customer" },
    ],
  },
  {
    id: 3, name: "Sara", phone: "+966512345678",
    avatar: "S", avatarColor: "bg-sky-500",
    lastMessage: "صورة", time: "13:01", channel: "8000", messageType: "image", replies: 1,
    messages: [
      { id: 1, text: "هلا، عندي سؤال عن جدول المحاضرات", time: "12:45", from: "customer" },
      { id: 2, text: "تفضلي سارة 😊", time: "12:46", from: "agent", status: "read" },
      { id: 3, text: "[صورة] جدول_المحاضرات.jpg", time: "13:01", from: "customer", type: "image" },
    ],
  },
  {
    id: 4, name: "ام نايف 🌿", phone: "+966523456789",
    avatar: "I", avatarColor: "bg-pink-500",
    lastMessage: "ايش صار باعسل", time: "12:47", channel: "8000", unread: 0, replies: 1,
    messages: [
      { id: 1, text: "السلام عليكم، اشتركت ببنتي الأسبوع اللي فات", time: "12:20", from: "customer" },
      { id: 2, text: "وعليكم السلام! أهلاً، تفضلي أسمعك 🌸", time: "12:22", from: "agent", status: "read" },
      { id: 3, text: "ما وصلني رابط الدخول للمنصة", time: "12:30", from: "customer" },
      { id: 4, text: "سنرسله الآن فوراً على رقمك، اعذرينا على التأخير", time: "12:32", from: "agent", status: "delivered" },
      { id: 5, text: "ايش صار باعسل", time: "12:47", from: "customer" },
    ],
  },
  {
    id: 5, name: "Om Omaar", phone: "+966534541476",
    avatar: "O", avatarColor: "bg-teal-500",
    lastMessage: "فيديو", time: "11:40", channel: "9816", messageType: "video", assignedTo: "سارة مصطفى", replies: 1,
    messages: [
      { id: 1, text: "مرحبا عندي استفسار", time: "11:20", from: "customer" },
      { id: 2, text: "أهلاً! تفضل 😊", time: "11:22", from: "agent", status: "read" },
      { id: 3, text: "[فيديو] شرح_المنهج.mp4", time: "11:40", from: "customer", type: "video" },
    ],
  },
  {
    id: 6, name: "Nora Ahmed", phone: "+966545678901",
    avatar: "N", avatarColor: "bg-orange-500",
    lastMessage: "متى موعد الحلقة القادمة؟", time: "11:15", channel: "8000", unread: 2,
    messages: [
      { id: 1, text: "هلا، متى موعد الحلقة القادمة للرياضيات؟", time: "11:10", from: "customer" },
      { id: 2, text: "متى موعد الحلقة القادمة؟", time: "11:15", from: "customer" },
    ],
  },
  {
    id: 7, name: "خالد العمري", phone: "+966556789012",
    avatar: "خ", avatarColor: "bg-purple-500",
    lastMessage: "شكراً جزيلاً على المساعدة", time: "10:50", channel: "8000",
    messages: [
      { id: 1, text: "وصلني رابط الاشتراك، جزاكم الله خير", time: "10:45", from: "customer" },
      { id: 2, text: "العفو! يسعدنا دائماً خدمتك 🙏", time: "10:47", from: "agent", status: "read" },
      { id: 3, text: "شكراً جزيلاً على المساعدة", time: "10:50", from: "customer" },
    ],
  },
];

const tabs = [
  { id: "unassigned", label: "غير معين", count: 4595 },
  { id: "mine", label: "تذاكري", count: 6 },
  { id: "waiting", label: "انتظار", count: null },
  { id: "resolved", label: "محلول", count: null },
];

/* ─── Sub-components ─────────────────────────────────── */
const WaIcon = () => (
  <svg width="9" height="9" viewBox="0 0 24 24" fill="white">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const MessageStatus = ({ status }: { status?: string }) => {
  if (status === "read") return <CheckCheck className="w-3.5 h-3.5 text-sky-400" />;
  if (status === "delivered") return <CheckCheck className="w-3.5 h-3.5 text-white/60" />;
  return <Check className="w-3.5 h-3.5 text-white/60" />;
};

/* ─── Main component ─────────────────────────────────── */
const Messages = () => {
  const [activeTab, setActiveTab] = useState("unassigned");
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState<Record<number, Message[]>>(() =>
    Object.fromEntries(conversations.map((c) => [c.id, c.messages]))
  );
  const bottomRef = useRef<HTMLDivElement>(null);

  const selected = conversations.find((c) => c.id === selectedId) ?? null;
  const messages = selectedId ? (msgs[selectedId] ?? []) : [];

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

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
    <div className="h-screen bg-background flex overflow-hidden">
      <DashboardSidebar />

      {/* ── Conversations sidebar ── */}
      <aside className="fixed top-0 right-[240px] h-screen w-[310px] bg-white border-l border-border flex flex-col z-40 shadow-sm">
        {/* Header */}
        <div className="px-4 pt-4 pb-3 border-b border-border">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base font-bold text-foreground">المحادثات</h2>
            <div className="flex items-center gap-2">
              <button className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors">
                <Plus className="w-4 h-4 text-primary-foreground" />
              </button>
              <button className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors">
                <SlidersHorizontal className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-slate-50 border border-border rounded-xl px-3 py-2">
            <Search className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />
            <input
              type="text"
              placeholder="بحث بالاسم أو الرقم..."
              className="flex-1 bg-transparent text-xs text-foreground placeholder:text-muted-foreground outline-none text-right"
            />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-1.5 px-3 py-2.5 border-b border-border flex-wrap">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center justify-center px-3 py-1.5 rounded-full text-xs font-medium transition-all
                  ${isActive ? "bg-primary text-primary-foreground shadow-sm" : "bg-secondary text-muted-foreground hover:text-foreground"}`}
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
            <button
              key={conv.id}
              onClick={() => setSelectedId(conv.id)}
              className={`w-full flex items-start gap-3 px-4 py-3 border-b border-border/40 transition-colors text-right
                ${selectedId === conv.id ? "bg-primary/8 border-r-2 border-r-primary" : "hover:bg-slate-50"}`}
            >
              <div className="flex-shrink-0 relative mt-0.5">
                <div className={`w-10 h-10 rounded-full ${conv.avatarColor} flex items-center justify-center text-white text-sm font-bold`}>
                  {conv.avatar}
                </div>
                <div className="absolute -bottom-0.5 -left-0.5 w-4 h-4 rounded-full bg-green-500 flex items-center justify-center border border-white">
                  <WaIcon />
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-0.5">
                  <span className="text-[11px] text-muted-foreground flex-shrink-0">{conv.time}</span>
                  <span className="text-sm font-semibold text-foreground truncate">{conv.name}</span>
                </div>

                <div className="flex items-center justify-between gap-1">
                  <div className="flex items-center gap-1 flex-shrink-0">
                    {(conv.unread ?? 0) > 0 && (
                      <span className="w-4 h-4 rounded-full bg-primary text-primary-foreground text-[9px] font-bold flex items-center justify-center">{conv.unread}</span>
                    )}
                    {conv.replies && (
                      <div className="flex items-center gap-0.5 text-muted-foreground">
                        <RotateCcw className="w-2.5 h-2.5" />
                        <span className="text-[10px]">{conv.replies}</span>
                      </div>
                    )}
                  </div>
                  <span className="text-xs text-muted-foreground truncate text-right">
                    {conv.messageType === "image" ? "📷 صورة" : conv.messageType === "video" ? "🎥 فيديو" : conv.lastMessage}
                  </span>
                </div>

                <div className="flex items-center gap-1 justify-end mt-1">
                  {conv.assignedTo && (
                    <span className="text-[9px] px-1.5 py-0.5 bg-blue-100 text-blue-700 rounded-full">{conv.assignedTo}</span>
                  )}
                  <span className="text-[9px] px-1.5 py-0.5 bg-slate-100 text-muted-foreground rounded-full">{conv.channel}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </aside>

      {/* ── Chat area ── */}
      <main className="flex-1 flex flex-col h-screen" style={{ marginRight: "550px" }}>
        {selected ? (
          <>
            {/* Chat header */}
            <div className="bg-white border-b border-border px-5 py-3 flex items-center justify-between flex-shrink-0 shadow-sm">
       

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
                <button className="flex items-center gap-1.5 px-3 py-1.5 bg-red-50 text-red-600 rounded-lg text-xs font-medium hover:bg-red-100 transition-colors border border-red-100">
                  <X className="w-3.5 h-3.5" />
                  إغلاق المحادثة
                </button>
                <button className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-600 rounded-lg text-xs font-medium hover:bg-blue-100 transition-colors border border-blue-100">
                  <UserPlus className="w-3.5 h-3.5" />
                  تعيين لموظف
                  <ChevronDown className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-6 py-5 bg-[#efeae2] flex flex-col gap-2"
              style={{ backgroundImage: "radial-gradient(circle, #d4d4d430 1px, transparent 1px)", backgroundSize: "20px 20px" }}>

              {/* Date divider */}
              <div className="flex items-center justify-center my-2">
                <span className="bg-white/80 text-muted-foreground text-[11px] px-3 py-1 rounded-full shadow-sm">اليوم</span>
              </div>

              {messages.map((msg) => {
                const isAgent = msg.from === "agent";
                return (
                  <div key={msg.id} className={`flex ${isAgent ? "justify-start" : "justify-end"}`}>
                    <div className={`max-w-[68%] px-3.5 py-2 rounded-2xl shadow-sm relative
                      ${isAgent
                        ? "bg-[#d9fdd3] rounded-tl-sm text-foreground"
                        : "bg-white rounded-tr-sm text-foreground"
                      }`}>
                      {msg.type === "image" ? (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Image className="w-4 h-4" />
                          <span>صورة</span>
                        </div>
                      ) : msg.type === "video" ? (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Video className="w-4 h-4" />
                          <span>فيديو</span>
                        </div>
                      ) : (
                        <p className="text-sm leading-relaxed">{msg.text}</p>
                      )}
                      <div className={`flex items-center gap-1 mt-1 ${isAgent ? "justify-end" : "justify-start"}`}>
                        <span className="text-[10px] text-muted-foreground">{msg.time}</span>
                        {isAgent && <MessageStatus status={msg.status} />}
                      </div>
                    </div>
                  </div>
                );
              })}
              <div ref={bottomRef} />
            </div>

            {/* Input bar */}
            <div className="bg-white border-t border-border px-4 py-3 flex items-center gap-3 flex-shrink-0">
              <button className="w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors flex-shrink-0 shadow-sm"
                onClick={sendMessage}>
                <Send className="w-4 h-4 text-white" />
              </button>

              <div className="flex-1 bg-slate-50 border border-border rounded-xl px-4 py-2.5 flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  placeholder="اكتب رسالة..."
                  className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none text-right"
                />
                <Mic className="w-4 h-4 text-muted-foreground cursor-pointer hover:text-foreground transition-colors" />
              </div>

              <div className="flex items-center gap-1.5">
                <button className="w-9 h-9 rounded-full hover:bg-secondary flex items-center justify-center transition-colors">
                  <Smile className="w-5 h-5 text-muted-foreground" />
                </button>
                <button className="w-9 h-9 rounded-full hover:bg-secondary flex items-center justify-center transition-colors">
                  <Paperclip className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>
            </div>
          </>
        ) : (
          /* Empty state */
          <div className="flex-1 flex flex-col items-center justify-center gap-4 bg-[#efeae2]"
            style={{ backgroundImage: "radial-gradient(circle, #d4d4d430 1px, transparent 1px)", backgroundSize: "20px 20px" }}>
            <div className="w-24 h-24 rounded-3xl border-2 border-dashed border-border/60 flex items-center justify-center bg-white/60">
              <div className="w-10 h-10 rounded-xl border-2 border-dashed border-muted-foreground/30" />
            </div>
            <div className="text-center">
              <p className="text-base font-semibold text-foreground">اختر محادثة للبدء</p>
              <p className="text-sm text-muted-foreground mt-1">ستظهر الرسائل هنا</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Messages;
