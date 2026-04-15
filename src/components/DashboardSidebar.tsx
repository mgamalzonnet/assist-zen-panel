import { BarChart3, MessageSquare, Users, UserCircle, Send, Settings } from "lucide-react";
import { useState } from "react";

const navItems = [
  { icon: BarChart3, label: "التقارير", id: "reports" },
  { icon: MessageSquare, label: "الرسائل", id: "messages" },
  { icon: Users, label: "العملاء", id: "clients" },
  { icon: UserCircle, label: "الفريق", id: "team" },
  { icon: Send, label: "الحملات", id: "campaigns" },
  { icon: Settings, label: "الإعدادات", id: "settings" },
];

interface DashboardSidebarProps {
  activeItem?: string;
  onItemClick?: (id: string) => void;
}

const DashboardSidebar = ({ activeItem = "reports", onItemClick }: DashboardSidebarProps) => {
  return (
    <aside className="fixed top-0 right-0 h-screen w-20 bg-[hsl(var(--sidebar-bg))] flex flex-col items-center py-6 z-50">
      {/* Logo */}
      <div className="mb-8">
        <div className="text-2xl font-bold text-primary-foreground font-cairo tracking-tight">
          لبيّ
        </div>
      </div>

      {/* Label */}
      <div className="text-[hsl(var(--sidebar-fg))] text-xs mb-4 opacity-60">القائمة</div>

      {/* Nav items */}
      <nav className="flex flex-col gap-1 flex-1 w-full px-2">
        {navItems.map((item) => {
          const isActive = activeItem === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onItemClick?.(item.id)}
              className={`flex flex-col items-center gap-1 py-3 rounded-lg transition-all text-xs
                ${isActive
                  ? "bg-[hsl(var(--sidebar-active))] text-primary-foreground shadow-lg"
                  : "text-[hsl(var(--sidebar-fg))] hover:bg-[hsl(var(--sidebar-accent))] hover:text-primary-foreground"
                }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Bottom info */}
      <div className="mt-auto flex flex-col items-center gap-2 text-[hsl(var(--sidebar-fg))]">
        <div className="flex items-center gap-1 text-[10px] opacity-60">
          <span className="w-2 h-2 rounded-full bg-muted-foreground" />
          غير متصل
        </div>
        <div className="text-[10px] opacity-60">تسليم الشفت</div>
        <div className="w-10 h-10 rounded-full bg-[hsl(var(--sidebar-active))] flex items-center justify-center text-primary-foreground font-bold text-sm">
          من
        </div>
        <div className="text-[9px] text-center leading-tight opacity-80">
          منصة الدولفن التعليمية
          <br />
          <span className="opacity-60">مدير النظام</span>
        </div>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
