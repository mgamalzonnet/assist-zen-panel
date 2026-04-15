import { Clock, CheckCircle2, MessageSquare, Calendar } from "lucide-react";
import DashboardSidebar from "@/components/DashboardSidebar";
import StatCard from "@/components/StatCard";
import PerformanceTable from "@/components/PerformanceTable";
import EmployeeChart from "@/components/EmployeeChart";
import CategoryChart from "@/components/CategoryChart";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />

      {/* Main content */}
      <main className="mr-20 p-6 lg:p-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
          {/* Date filters */}
          <div className="flex items-center gap-2 flex-wrap">
            <div className="flex items-center gap-1 bg-card border border-border rounded-lg px-3 py-2 text-sm">
              <Calendar className="w-4 h-4 text-muted-foreground" />
              <span>اليوم: 2026-04-15</span>
            </div>
            <div className="flex items-center gap-1 bg-card border border-border rounded-lg px-3 py-2 text-sm">
              <Calendar className="w-4 h-4 text-muted-foreground" />
              <span>04/15/2026</span>
            </div>
            <span className="text-sm text-muted-foreground">إلى</span>
            <div className="flex items-center gap-1 bg-card border border-border rounded-lg px-3 py-2 text-sm">
              <Calendar className="w-4 h-4 text-muted-foreground" />
              <span>04/15/2026</span>
            </div>
            <span className="text-sm text-muted-foreground">من</span>
            <div className="flex items-center gap-1">
              {["30 يوم", "7 أيام", "الأمس", "اليوم"].map((label, i) => (
                <button
                  key={label}
                  className={`px-3 py-1.5 text-sm rounded-lg transition-all ${
                    i === 3
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:bg-secondary"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Title */}
          <div className="text-right">
            <h1 className="text-2xl font-bold text-foreground flex items-center gap-3 justify-end">
              لوحة التحليلات
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-primary" />
              </div>
            </h1>
            <p className="text-sm text-muted-foreground mt-1">نظرة شاملة على أداء الفريق والمحادثات</p>
          </div>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard
            title="بالانتظار الرد"
            value="٣٠٧"
            subtitle="تذاكر مفتوحة حالياً"
            icon={Clock}
            colorClass="bg-gradient-to-bl from-stat-orange to-stat-orange-dark"
          />
          <StatCard
            title="تم حلها"
            value="٢٥٩"
            subtitle="محادثات مغلقة بنجاح"
            icon={CheckCircle2}
            colorClass="bg-gradient-to-bl from-stat-teal to-stat-teal-dark"
          />
          <StatCard
            title="محادثات جديدة"
            value="٦٠"
            subtitle="خلال الفترة المحددة"
            icon={MessageSquare}
            colorClass="bg-gradient-to-bl from-stat-blue to-stat-blue-dark"
          />
        </div>

        {/* Charts row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <CategoryChart />
          <EmployeeChart />
        </div>

        {/* Performance Table */}
        <PerformanceTable />
      </main>
    </div>
  );
};

export default Index;
