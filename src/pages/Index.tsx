import { useState } from "react";
import { Clock, CheckCircle2, MessageSquare, Calendar, ChevronDown } from "lucide-react";
import StatCard from "@/components/StatCard";
import PerformanceTable from "@/components/PerformanceTable";
import EmployeeChart from "@/components/EmployeeChart";
import CategoryChart from "@/components/CategoryChart";

const quickRanges = ["اليوم", "الأمس", "7 أيام", "30 يوم"];

const Index = () => {
  const [activeRange, setActiveRange] = useState(0);

  return (
    <>
      {/* ── Top bar ── */}
      <header className="sticky top-0 z-30 bg-card/80 backdrop-blur border-b border-border px-4 lg:px-8 py-4 pr-16 lg:pr-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        {/* Title */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
            <MessageSquare className="w-4 h-4 text-primary" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-foreground leading-tight">لوحة التحليلات</h1>
            <p className="text-xs text-muted-foreground">نظرة شاملة على أداء الفريق والمحادثات</p>
          </div>
        </div>

        {/* Date controls */}
        <div className="flex items-center gap-2 flex-wrap justify-end w-full sm:w-auto">
          {/* Quick range pills */}
          <div className="flex items-center bg-secondary/60 border border-border rounded-xl p-1 gap-0.5">
            {quickRanges.map((label, i) => (
              <button
                key={label}
                onClick={() => setActiveRange(i)}
                className={`px-2.5 py-1.5 text-xs rounded-lg font-medium transition-all duration-300 ease-out ${
                  activeRange === i
                    ? "bg-background text-foreground shadow-sm border border-border"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Date range picker — hidden on small screens */}
          <div className="hidden md:flex items-center gap-2 bg-secondary/60 border border-border rounded-xl px-3 py-2">
            <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors duration-300 ease-out">
              <Calendar className="w-3.5 h-3.5" />
              <span>15/04/2026</span>
              <ChevronDown className="w-3 h-3" />
            </button>
            <span className="text-muted-foreground/50 text-xs">—</span>
            <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors duration-300 ease-out">
              <Calendar className="w-3.5 h-3.5" />
              <span>15/04/2026</span>
              <ChevronDown className="w-3 h-3" />
            </button>
          </div>
        </div>
      </header>

      {/* ── Page body ── */}
      <div className="flex-1 p-4 lg:p-8 flex flex-col gap-6 lg:gap-8">
        {/* Stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-5">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5">
          <CategoryChart />
          <EmployeeChart />
        </div>

        {/* Performance table */}
        <PerformanceTable />
      </div>
    </>
  );
};

export default Index;
