import { BarChart3, MessageSquare, Users, UserCircle, Send, Settings, Moon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const navItems = [
  { icon: MessageSquare, label: "الرسائل", path: "/messages" },
  { icon: UserCircle, label: "العملاء", path: "/customers" },
  { icon: Users, label: "الفريق", path: "/team" },
  { icon: Send, label: "الحملات", path: "/campaigns" },
  { icon: BarChart3, label: "التقارير", path: "/" },
  { icon: Settings, label: "الإعدادات", path: "/settings" },
];

const DashboardSidebar = () => {
  const location = useLocation();

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <aside className="fixed top-0 right-0 h-screen w-28 bg-primary flex flex-col items-center border-l border-white/85 py-5 z-50 shadow-xl">

      {/* Logo */}
      <div className="  flex items-center justify-center pb-4 mb-4  flex-shrink-0 border-b border-white/10">
        <img src="/logo-white.png" alt="logo" className="w-full  object-contain" />
      </div>

      {/* Nav items */}
      <nav className="flex flex-col w-full items-center gap-4 flex-1">
        {navItems.map((item) => (
          <Tooltip key={item.path}>
            <TooltipTrigger asChild>
              <Link
                to={item.path}
                className={`group relative h-16 w-full flex items-center justify-center overflow-hidden
                  ${isActive(item.path) ? "text-white" : "text-white/65 hover:text-white"}`}
              >
                {/* Sliding background */}
                <span
                  className={`absolute inset-0 bg-white/20 transition-transform duration-700 ease-out
                    ${isActive(item.path)
                      ? "translate-x-0"
                      : "translate-x-full group-hover:translate-x-0"
                    }`}
                />
                {/* Sliding indicator bar */}
                <span
                  className={`absolute right-0 top-0 h-full w-1 bg-white transition-transform duration-700 ease-out
                    ${isActive(item.path)
                      ? "translate-x-0"
                      : "translate-x-full group-hover:translate-x-0"
                    }`}
                />
                <item.icon
                  className={`relative z-10 w-[28px] h-[28px] transition-all duration-700`}
                />
              </Link>
            </TooltipTrigger>
            <TooltipContent side="left" className="font-cairo text-xs">
              {item.label}
            </TooltipContent>
          </Tooltip>
        ))}
      </nav>

      {/* Bottom icon */}
      <Tooltip>
        <TooltipTrigger asChild>
          <button className="w-10 h-10 flex items-center justify-center rounded-xl text-white/65 hover:bg-white/15 hover:text-white transition-all duration-700 flex-shrink-0">
            <Moon className="w-[19px] h-[19px]" />
          </button>
        </TooltipTrigger>
        <TooltipContent side="left" className="font-cairo text-xs">
          الوضع الليلي
        </TooltipContent>
      </Tooltip>
    </aside>
  );
};

export default DashboardSidebar;
