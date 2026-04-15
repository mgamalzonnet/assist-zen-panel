import { PieChart } from "lucide-react";

const CategoryChart = () => {
  return (
    <div className="bg-card rounded-2xl shadow-sm border border-border p-6 flex flex-col items-center justify-center min-h-[280px]">
      <div className="text-right w-full mb-6">
        <h2 className="text-lg font-bold text-foreground">توزيع التصنيفات</h2>
        <p className="text-sm text-muted-foreground">توزيع المحادثات حسب النوع</p>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center text-muted-foreground">
        <PieChart className="w-12 h-12 mb-3 opacity-30" />
        <p className="text-sm">لا توجد بيانات تصنيفات حالياً</p>
      </div>
    </div>
  );
};

export default CategoryChart;
