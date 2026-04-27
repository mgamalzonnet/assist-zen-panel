import { useState } from "react";
import { Smartphone, MessageSquare, Star, Bot, Shuffle, Layers, Key } from "lucide-react";
import DeviceCard from "@/components/settings/DeviceCard";
import type { Device } from "@/types";

const tabs = [
  { id: "devices",   label: "الأجهزة المرتبطة",       icon: Smartphone },
  { id: "templates", label: "الردود السريعة",           icon: MessageSquare },
  { id: "rating",    label: "تقييم الموظف",            icon: Star },
  { id: "ai",        label: "الذكاء الاصطناعي",        icon: Bot },
  { id: "routing",   label: "التوزيع التلقائي",         icon: Shuffle },
  { id: "queues",    label: "الأقسام",                  icon: Layers },
  { id: "apikey",    label: "API Key",                  icon: Key },
];

const devices: Device[] = [
  { id: 1, number: "4259",       label: "محظور مؤقتاً",   status: "blocked_temp" },
  { id: 2, number: "0541109019", label: "في انتظار المسح", status: "waiting_scan", showQr: true },
];

const Settings = () => {
  const [activeTab, setActiveTab] = useState("devices");
  const activeTabMeta = tabs.find((t) => t.id === activeTab)!;

  return (
    <div className="p-4 pt-16 sm:pt-6 lg:p-8">
      {/* Header */}
      <div className="text-right mb-6">
        <h1 className="text-2xl font-bold text-foreground">الإعدادات</h1>
        <p className="text-sm text-muted-foreground mt-1">
          قم بإدارة أجهزتك المرتبطة وردودك السريعة لتسهيل المحادثات.
        </p>
      </div>

      {/* Tabs — scrollable on mobile */}
      <div className="flex items-center gap-1 border-b border-border mb-6 pb-0 overflow-x-auto scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-3 py-2.5 text-sm whitespace-nowrap transition-all border-b-2 -mb-px flex-shrink-0
              ${activeTab === tab.id
                ? "border-primary text-primary font-semibold"
                : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
          >
            <tab.icon className="w-4 h-4" />
            <span className="hidden sm:inline">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab content — devices */}
      {activeTab === "devices" && (
        <div className="flex flex-col gap-4 max-w-2xl">
          {devices.map((device) => (
            <DeviceCard key={device.id} device={device} />
          ))}
          <button className="flex items-center justify-center gap-2 border-2 border-dashed border-border rounded-2xl py-4 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all">
            <Smartphone className="w-4 h-4" />
            إضافة جهاز جديد
          </button>
        </div>
      )}

      {/* Placeholder tabs */}
      {activeTab !== "devices" && activeTab !== "apikey" && (
        <div className="text-center py-20 text-muted-foreground">
          <activeTabMeta.icon className="w-12 h-12 mx-auto mb-3 opacity-30" />
          <p>{activeTabMeta.label}</p>
        </div>
      )}

      {/* API Key tab */}
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
    </div>
  );
};

export default Settings;
