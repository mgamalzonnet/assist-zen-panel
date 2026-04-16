import DashboardSidebar from "@/components/sidebar/DashboardSidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />
      <main className="mr-[240px] flex flex-col min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
