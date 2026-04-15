import { useState } from "react";
import { Clock, CheckCircle2, MessageSquare, Calendar, ChevronDown } from "lucide-react";
import DashboardSidebar from "@/components/DashboardSidebar";
import StatCard from "@/components/StatCard";
import PerformanceTable from "@/components/PerformanceTable";
import EmployeeChart from "@/components/EmployeeChart";
import CategoryChart from "@/components/CategoryChart";

const quickRanges = ["اليوم", "الأمس", "7 أيام", "30 يوم"];

const Index = () => {
  const [activeRange, setActiveRange] = useState(0);

  return (
    <div className="min-h-screen bg-slate-50">
      <DashboardSidebar />

      <div className="mr-[240px] flex flex-col min-h-screen">

        {/* ── Top bar ── */}
        <header className="sticky top-0 z-30 bg-white border-b border-slate-100 px-8 py-4 flex items-center justify-between gap-6">

          {/* Title */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
              <MessageSquare className="w-4 h-4 text-primary" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground leading-tight">لوحة التحليلات</h1>
              <p className="text-xs text-muted-foreground">نظرة شاملة على أداء الفريق والمحادثات</p>
            </div>
          </div>

          {/* Date controls */}
          <div className="flex items-center gap-3">
            {/* Quick range pills */}
            <div className="flex items-center bg-slate-100 rounded-xl p-1 gap-0.5">
              {quickRanges.map((label, i) => (
                <button
                  key={label}
                  onClick={() => setActiveRange(i)}
                  className={`px-3 py-1.5 text-xs rounded-lg font-medium transition-all ${
                    activeRange === i
                      ? "bg-white text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Date range picker */}
            <div className="flex items-center gap-2 bg-slate-100 rounded-xl px-3 py-2">
              <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors">
                <Calendar className="w-3.5 h-3.5" />
                <span>15/04/2026</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              <span className="text-muted-foreground/50 text-xs">—</span>
              <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors">
                <Calendar className="w-3.5 h-3.5" />
                <span>15/04/2026</span>
                <ChevronDown className="w-3 h-3" />
              </button>
            </div>
          </div>
        </header>

        {/* ── Page body ── */}
        <main className="flex-1 p-8 flex flex-col gap-8">

          {/* Stat cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
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

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <CategoryChart />
            <EmployeeChart />
          </div>

          {/* Performance table */}
          <PerformanceTable />

        </main>
      </div>
    </div>
  );
};

export default Index;
