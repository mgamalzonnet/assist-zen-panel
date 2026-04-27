import { BarChart3, MessageSquare, Users, UserCircle, Send, Settings, X } from "lucide-react";
import { NavLink } from "react-router-dom";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { icon: BarChart3, label: "التقارير", path: "/" },
  { icon: MessageSquare, label: "الرسائل", path: "/messages" },
  { icon: Users, label: "العملاء", path: "/customers" },
  { icon: UserCircle, label: "الفريق", path: "/team" },
  { icon: Send, label: "الحملات", path: "/campaigns" },
  { icon: Settings, label: "الإعدادات", path: "/settings" },
];

const DashboardSidebar = ({ isOpen, onClose }: Props) => {
  return (
    <>
      {/* Mobile backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-[55] lg:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      <aside
        className={`fixed top-0 right-0 h-screen w-[240px] bg-sidebar text-sidebar-foreground flex flex-col py-5 z-[60] border-r border-sidebar-border shadow-sm animate-fade-in transition-transform duration-300
          ${isOpen ? "translate-x-0" : "translate-x-full"} lg:translate-x-0`}
      >
        {/* Mobile close button */}
        <button
          className="lg:hidden absolute top-3 left-3 p-1.5 rounded-lg hover:bg-[hsl(var(--sidebar-accent))] transition-colors text-[hsl(var(--sidebar-fg))] opacity-70"
          onClick={onClose}
        >
          <X className="w-4 h-4" />
        </button>

        {/* Logo */}
        <div className="flex justify-center mb-6 px-4">
          <img src="/logo-white.png" alt="logo" className="h-14 w-auto object-contain" />
        </div>

        {/* Menu label */}
        <div className="text-[11px] text-[hsl(var(--sidebar-fg))] opacity-50 mb-1 px-5 text-right">القائمة</div>

        {/* Nav items */}
        <nav className="flex flex-col gap-0.5 flex-1 px-3">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-300 ease-out text-sm cursor-pointer select-none
                ${isActive
                  ? "bg-primary text-primary-foreground shadow-md font-semibold"
                  : "text-[hsl(var(--sidebar-fg))] hover:bg-[hsl(var(--sidebar-accent))] hover:text-primary-foreground hover:shadow-sm"
                }`
              }
            >
              <item.icon className="w-[18px] h-[18px] flex-shrink-0" />
              <span className="font-cairo flex-1 text-right">{item.label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Bottom section */}
        <div className="flex flex-col gap-3 px-4 pt-4 border-t border-sidebar-border">
          {/* Online toggle */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--sidebar-fg))] opacity-40" />
              <span className="text-xs text-[hsl(var(--sidebar-fg))] opacity-60">غير متصل</span>
            </div>
            <div className="w-9 h-5 rounded-full bg-[hsl(var(--sidebar-accent))] relative cursor-pointer flex-shrink-0">
              <div className="absolute right-0.5 top-0.5 w-4 h-4 rounded-full bg-[hsl(var(--sidebar-fg))] opacity-60 transition-all duration-300 ease-out" />
            </div>
          </div>

          {/* Shift handover */}
          <div className="flex items-center justify-between cursor-pointer hover:opacity-80 transition-opacity">
            <span className="text-xs text-[hsl(var(--sidebar-fg))] opacity-60">تسليم الشفت</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[hsl(var(--sidebar-fg))] opacity-60 flex-shrink-0">
              <path d="M17 1l4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/>
              <path d="M7 23l-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>
            </svg>
          </div>

          {/* User info */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-md bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm shadow-sm flex-shrink-0">
              من
            </div>
            <div className="text-right flex-1 min-w-0">
              <div className="text-[11px] text-primary-foreground font-bold leading-tight truncate">منصة الدولفين التعليمية</div>
              <div className="text-[10px] text-[hsl(var(--sidebar-fg))] opacity-60 leading-tight">مدير النظام</div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default DashboardSidebar;
