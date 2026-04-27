import { useState } from "react";
import { Menu } from "lucide-react";
import DashboardSidebar from "@/components/sidebar/DashboardSidebar";
import { Outlet, useLocation } from "react-router-dom";

const DashboardLayout = () => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showHamburger, setShowHamburger] = useState(true);

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[#F0F0F0]"
      />

      {/* Mobile hamburger button — hidden when a child page requests it */}
      {showHamburger && (
        <button
          className="fixed top-4 right-4 z-[70] lg:hidden p-2 rounded-xl bg-sidebar text-sidebar-foreground shadow-md"
          onClick={() => setSidebarOpen(true)}
          aria-label="فتح القائمة"
        >
          <Menu className="w-5 h-5" />
        </button>
      )}

      <DashboardSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="relative mr-0 lg:mr-[240px] flex flex-col min-h-screen">
        <div key={location.pathname} className="animate-slide-in-up">
          <Outlet context={{ setShowHamburger }} />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
