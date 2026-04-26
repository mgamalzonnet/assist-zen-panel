import DashboardSidebar from "@/components/sidebar/DashboardSidebar";
import { Outlet, useLocation } from "react-router-dom";

const DashboardLayout = () => {
  const location = useLocation();

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[#F0F0F0]"
      />
      <DashboardSidebar />
      <main className="relative mr-[240px] flex flex-col min-h-screen">
        <div key={location.pathname} className="animate-slide-in-up">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
