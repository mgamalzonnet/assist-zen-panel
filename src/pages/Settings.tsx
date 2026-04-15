import { useState } from "react";
import { Smartphone, MessageSquare, Star, Bot, Shuffle, Layers, Key, Link, Trash2, QrCode } from "lucide-react";
import DashboardSidebar from "@/components/DashboardSidebar";

const tabs = [
  { id: "devices", label: "الأجهزة المرتبطة", icon: Smartphone },
  { id: "templates", label: "الردود السريعة (القوالب)", icon: MessageSquare },
  { id: "rating", label: "تقييم الموظف", icon: Star },
  { id: "ai", label: "الذكاء الاصطناعي", icon: Bot },
  { id: "routing", label: "التوزيع التلقائي", icon: Shuffle },
  { id: "queues", label: "الأقسام (Queues)", icon: Layers },
  { id: "apikey", label: "API Key", icon: Key },
];

type DeviceStatus = "blocked_temp" | "waiting_scan" | "connected";

interface Device {
  id: number;
  number: string;
  label: string;
  status: DeviceStatus;
  showQr?: boolean;
}

const devices: Device[] = [
  { id: 1, number: "4259", label: "محظور مؤقتاً", status: "blocked_temp" },
  { id: 2, number: "0541109019", label: "في انتظار المسح", status: "waiting_scan", showQr: true },
];

const DeviceStatusBadge = ({ status }: { status: DeviceStatus }) => {
  const map: Record<DeviceStatus, { label: string; cls: string }> = {
    blocked_temp: { label: "محظور مؤقتاً", cls: "bg-orange-100 text-orange-600 border border-orange-200" },
    waiting_scan: { label: "في انتظار المسح", cls: "bg-yellow-100 text-yellow-700 border border-yellow-200" },
    connected: { label: "متصل", cls: "bg-emerald-100 text-emerald-700 border border-emerald-200" },
  };
  const s = map[status];
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${s.cls}`}>
      {s.label}
    </span>
  );
};

/* Simple SVG QR placeholder */
const QrPlaceholder = () => (
  <div className="w-40 h-40 border-2 border-border rounded-xl flex items-center justify-center bg-white mx-auto">
    <svg viewBox="0 0 100 100" width="130" height="130" xmlns="http://www.w3.org/2000/svg">
      {/* Top-left finder */}
      <rect x="5" y="5" width="30" height="30" rx="3" fill="none" stroke="#111" strokeWidth="4"/>
      <rect x="13" y="13" width="14" height="14" rx="1" fill="#111"/>
      {/* Top-right finder */}
      <rect x="65" y="5" width="30" height="30" rx="3" fill="none" stroke="#111" strokeWidth="4"/>
      <rect x="73" y="13" width="14" height="14" rx="1" fill="#111"/>
      {/* Bottom-left finder */}
      <rect x="5" y="65" width="30" height="30" rx="3" fill="none" stroke="#111" strokeWidth="4"/>
      <rect x="13" y="73" width="14" height="14" rx="1" fill="#111"/>
      {/* Data dots */}
      {[45,52,59,66,73,80].map((x) =>
        [45,52,59,66,73,80].map((y) =>
          Math.random() > 0.4 ? <rect key={`${x}-${y}`} x={x} y={y} width="5" height="5" fill="#111"/> : null
        )
      )}
      {[45,52,59].map((x) =>
        [5,12,19,26].map((y) =>
          Math.random() > 0.4 ? <rect key={`d-${x}-${y}`} x={x} y={y} width="5" height="5" fill="#111"/> : null
        )
      )}
    </svg>
  </div>
);

const Settings = () => {
  const [activeTab, setActiveTab] = useState("devices");

  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />

      <main className="mr-[240px] p-6 lg:p-8">
        {/* Header */}
        <div className="text-right mb-6">
          <h1 className="text-2xl font-bold text-foreground">الإعدادات</h1>
          <p className="text-sm text-muted-foreground mt-1">
            قم بإدارة أجهزتك المرتبطة وردودك السريعة لتسهيل المحادثات.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-1 border-b border-border mb-6 overflow-x-auto pb-0">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 text-sm whitespace-nowrap transition-all border-b-2 -mb-px
                ${activeTab === tab.id
                  ? "border-primary text-primary font-semibold"
                  : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        {activeTab === "devices" && (
          <div className="flex flex-col gap-4 max-w-2xl">
            {devices.map((device) => (
              <div key={device.id} className="bg-card border border-border rounded-2xl shadow-sm overflow-hidden">
                {/* Device row */}
                <div className="flex items-center justify-between px-6 py-4">
                  {/* Actions */}
                  <div className="flex items-center gap-3">
                    {device.status === "blocked_temp" && (
                      <button className="flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors font-medium">
                        <Link className="w-3.5 h-3.5" />
                        ربط
                      </button>
                    )}
                    <button className="flex items-center gap-1.5 text-sm text-red-500 hover:text-red-600 transition-colors font-medium">
                      <Trash2 className="w-3.5 h-3.5" />
                      حذف
                    </button>
                  </div>

                  {/* Status badge */}
                  <DeviceStatusBadge status={device.status} />

                  {/* Device info */}
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <div className="font-semibold text-foreground font-mono">{device.number}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{device.label}</div>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                      <Smartphone className="w-5 h-5 text-muted-foreground" />
                    </div>
                  </div>
                </div>

                {/* QR section */}
                {device.showQr && (
                  <div className="border-t border-border px-6 py-6 text-center bg-secondary/20">
                    <div className="flex items-center justify-center gap-2 mb-4 text-foreground font-semibold">
                      <QrCode className="w-4 h-4" />
                      قم بمسح الكود (QR) لربط رقمك
                    </div>
                    <QrPlaceholder />
                    <p className="text-xs text-muted-foreground mt-3">
                      افتح واتساب ← الأجهزة المرتبطة ← ربط جهاز ← امسح الكود
                    </p>
                  </div>
                )}
              </div>
            ))}

            {/* Add device button */}
            <button className="flex items-center justify-center gap-2 border-2 border-dashed border-border rounded-2xl py-4 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all">
              <Smartphone className="w-4 h-4" />
              إضافة جهاز جديد
            </button>
          </div>
        )}

        {activeTab === "templates" && (
          <div className="text-center py-20 text-muted-foreground">
            <MessageSquare className="w-12 h-12 mx-auto mb-3 opacity-30" />
            <p>لا توجد قوالب ردود سريعة حالياً</p>
          </div>
        )}

        {activeTab === "rating" && (
          <div className="text-center py-20 text-muted-foreground">
            <Star className="w-12 h-12 mx-auto mb-3 opacity-30" />
            <p>إعدادات تقييم الموظف</p>
          </div>
        )}

        {activeTab === "ai" && (
          <div className="text-center py-20 text-muted-foreground">
            <Bot className="w-12 h-12 mx-auto mb-3 opacity-30" />
            <p>إعدادات الذكاء الاصطناعي</p>
          </div>
        )}

        {activeTab === "routing" && (
          <div className="text-center py-20 text-muted-foreground">
            <Shuffle className="w-12 h-12 mx-auto mb-3 opacity-30" />
            <p>إعدادات التوزيع التلقائي</p>
          </div>
        )}

        {activeTab === "queues" && (
          <div className="text-center py-20 text-muted-foreground">
            <Layers className="w-12 h-12 mx-auto mb-3 opacity-30" />
            <p>إدارة الأقسام (Queues)</p>
          </div>
        )}

        {activeTab === "apikey" && (
          <div className="max-w-xl">
            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-foreground mb-4 text-right">مفتاح API</h3>
              <div className="flex items-center gap-3">
                <button className="px-4 py-2 bg-primary text-primary-foreground text-sm rounded-xl hover:bg-primary/90 transition-colors font-medium flex-shrink-0">
                  نسخ
                </button>
                <div className="flex-1 bg-secondary border border-border rounded-xl px-4 py-2.5 font-mono text-xs text-muted-foreground text-right truncate">
                  sk-••••••••••••••••••••••••••••••••
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Settings;
